import uuid
import os
from typing import List, Dict, Optional, Union
from pydantic import BaseModel, Field, ValidationError, field_validator
from pathlib import Path
import pinecone
import json
from sentence_transformers import SentenceTransformer
import logging
from dotenv.main import logger
from dotenv import load_dotenv
import time


# Pydantic Models for data validation
class InputOutputPair (BaseModel):
    input: str = Field(..., min_length=1, max_length=5000,
                       description="Input text/question")
    output: str = Field(..., min_length=1, max_length=5000,
                        description="Output text/answer")
    metadata: Optional[Dict[str, Union[str, int, float]]] = Field(
        default_factory=dict, description="Additional metadata")

    @field_validator('input', 'output')
    @classmethod
    def validate_text_not_empty(cls, v: str):
        if not v.strip():
            raise ValueError('Text cannot be empty or just whitespace')
        return v.strip()


class PineconeVector(BaseModel):
    id: str = Field(..., description="Unique Vector ID")
    values: List[float] = Field(..., min_items=1,
                                description="Embedding values")
    metadata: Dict[str, Union[str, int, float]
                   ] = Field(..., description="Vector metadata")

    @field_validator('values')
    @classmethod
    def validate_values(cls, v):
        if not all(isinstance(val, (int, float)) for val in v):
            raise ValueError("All embedding values must be numeric")
        return v


class DataIngestionConfig(BaseModel):
    pinecone_api_key: str = Field(..., description="Pinecone API Key")
    pinecone_environment: str = Field(..., description="Pinecone Environment")
    index_name: str = Field(..., description="Pinecone index name")
    embedding_model: str = Field(
        default="all-MiniLM-L6-v2", description="Sentence transformer model")
    embedding_dimension: int = Field(
        default=384, ge=1, description="Embedding dimension")
    batch_size: int = Field(default=100, ge=1, le=1000,
                            description="Batch size for uploading")

    @field_validator("pinecone_api_key", "pinecone_environment", "index_name")
    @classmethod
    def validate_not_empty(cls, v):
        if not v.strip():
            raise ValueError('Value cannot be empty')
        return v.strip()


class DataSource(BaseModel):
    file_path: Optional[str] = Field(None, description="Path to JSON file")
    data_list: Optional[List[Dict]] = Field(None, description="Direct data list")

    @field_validator('file_path')
    @classmethod
    def validate_file_exists(cls, v):
        if v and not Path(v).exists():
            raise ValueError(f"File does not exists: {v}")
        return v


class IngestionStats(BaseModel):
    total_items: int = Field(..., ge=0, description="Total items processed")
    successful_items: int = Field(..., ge=0,
                                  description="Successfully  processed items")
    failed_items: int = Field(..., ge=0, description="Failed items")
    batches_uploaded: int = Field(..., ge=0,
                                  description="Number of batches uploaded")
    processing_time: float = Field(..., ge=0,
                                   description="Total processing time in seconds")


class DataIngestion:
    def __init__(self, config: DataIngestionConfig) -> None:
        """"Initialize with validated configuration"""
        self.config = config
        self.embedding_model = SentenceTransformer(self.config.embedding_model)
        self._initialize_pinecone()

    def _initialize_pinecone(self):
        """Initialize Pinecone connection"""
        try:
            self.pinecone = pinecone.Pinecone(
                api_key=self.config.pinecone_api_key)
            self._setup_index()
        except Exception as e:
            raise ConnectionError("Failed to initialize Pinecone: %s", e)

    def _setup_index(self) -> None:
        """Create or connect to Pinecone index"""
        try:
            # List existing indexes
            existing_indexes = [
                index.name for index in self.pinecone.list_indexes()]

            # Check for index exists
            if self.config.index_name not in existing_indexes:
                self.pinecone.create_index(
                    name=self.config.index_name,
                    dimension=self.config.embedding_dimension,
                    metric='cosine',
                    spec=pinecone.ServerlessSpec(
                        cloud="aws",
                        region="us-east-1"
                    )
                )
                print(f"✅ Created new index: {self.config.index_name}")
            else:
                print(
                    f"✅ Connected to existing index: {self.config.index_name}")

            # Save the index in the class variable
            self.index = self.pinecone.Index(self.config.index_name)
        except Exception as e:
            raise ConnectionError("Failed to setup Pinecone: %s", e)

    def create_embeddings(self, text: str) -> List[float]:
        """Create embeddings for the given text with validation"""
        try:
            if not text.strip():
                raise ValueError("Text cannot be empty")

            embeddings = self.embedding_model.encode([text])
            result = embeddings[0].tolist()

            # Validate embedddings dimension
            if len(result) != self.config.embedding_dimension:
                raise ValueError(
                    f"Unexpected embedding dimension: {len(result)} != {self.config.embedding_dimension}")

            return result

        except Exception as e:
            raise ValueError("Error creating embeddings: %s", e)

    def load_data_from_source(self, data_source: DataSource) -> List[InputOutputPair]:
        """Load and validate data from source"""
        raw_data = []

        try:
            if data_source.file_path:
                # Load data from json
                with open(data_source.file_path, 'r', encoding='utf-8') as f:
                    raw_data = json.load(f)
                print(
                    f"📁 Loaded {len(raw_data)} items from {data_source.file_path}")
            else:
                raise ValueError("Data file is not present")

            # Validate and convert to pydantic models
            validated_data = []
            failed_items = []

            for i, item in enumerate(raw_data):
                try:
                    validated_item = InputOutputPair(**item)
                    validated_data.append(validated_item)
                except ValidationError as e:
                    failed_items.append(
                        {"index": i, "error": str(e), "data": item})
                    print(f"⚠️  Validation failed for item {i}: {str(e)}")

            if failed_items:
                print(f"❌ {len(failed_items)} items failed validation")
                print("Failed items summary:")
                for failed in failed_items[:5]:  # Show first 5 failures
                    print(f"  - Index {failed['index']}: {failed['error']}")

            print(f"✅ {len(validated_data)} items passed validation")
            return validated_data

        except Exception as e:
            raise ValueError("Error loading data: %s", e)

    def prepare_vectors(self, data_pairs: List[InputOutputPair]) -> List[PineconeVector]:
        """Convert input-output pairs to pinecone vectors"""
        vectors = []
        failed_embeddings = []

        print("🔄 Creating embeddings...")

        for i, pair in enumerate(data_pairs):
            try:
                # Prepate metadata and embedding
                embedding = self.create_embeddings(pair.input)
                metadata = {
                    'input': pair.input,
                    'output': pair.output,
                    **pair.metadata  # Include any additional metadata
                }

                # Create vector
                vector = PineconeVector(
                    id=str(uuid.uuid4()),
                    values=embedding,
                    metadata=metadata
                )

                vectors.append(vector)

                if (i + 1) % 100 == 0:
                    print(
                        f"  📊 Processed {i + 1}/{len(data_pairs)} embeddings")

            except Exception as e:
                failed_embeddings.append(
                    {"index": i, "error": str(e), "pair": pair})
                print(f"⚠️  Failed to create embedding for item {i}: {str(e)}")

        if failed_embeddings:
            print(f"❌ {len(failed_embeddings)} embeddings failed")

        print(f"✅ Created {len(vectors)} vectors successfully")
        return vectors

    def upload_vectors(self, vectors: List[PineconeVector]) -> IngestionStats:
        """Upload vectors to Pinecone in batches"""
        start_time = time.time()
        print(f"🚀 Uploading {len(vectors)} vectors to Pinecone...")

        successful_uploads = 0
        failed_uploads = 0
        batches_uploaded = 0

        try:
            for i in range(0, len(vectors), self.config.batch_size):
                batch = vectors[i:i + self.config.batch_size]
                try:
                    batch_data = [vector.model_dump() for vector in batch]
                    self.index.upsert(vectors=batch_data)
                    successful_uploads += len(batch)
                    batches_uploaded += 1
                    print(f"  📤 Uploaded batch {batches_uploaded} ({len(batch)} vectors)")
                except Exception as e:
                    failed_uploads += len(batch)
                    print(f"❌ Failed to upload batch {batches_uploaded + 1}: {str(e)}")
            processing_time = time.time() - start_time
            stats = IngestionStats(
                total_items=len(vectors),
                successful_items=successful_uploads,
                failed_items=failed_uploads,
                batches_uploaded=batches_uploaded,
                processing_time=round(processing_time, 2)
            )
            print(f"\n📈 Upload Summary:")
            print(f"  ✅ Successful: {stats.successful_items}")
            print(f"  ❌ Failed: {stats.failed_items}")
            print(f"  📦 Batches: {stats.batches_uploaded}")
            print(f"  ⏱️  Time: {stats.processing_time}s")
            return stats
        except Exception as e:
            raise ConnectionError("Failed to upload vectors: %s", e)

    def run_full_ingestion(self, data_source: DataSource) -> IngestionStats:
        """Run complete data ingestion pipeline"""
        try:
            print("🚀 Starting data ingestion pipeline...\n")

            # Step 1: Load and validate data
            print("Step 1: Loading and validating data")
            data_pairs = self.load_data_from_source(data_source=data_source)
            if not data_pairs:
                raise ValueError("No valid data pairs found")

            # Step 2: Create embeddings and prepare vectors
            print("\nStep 2: Creating embeddings")
            vectors = self.prepare_vectors(data_pairs=data_pairs)
            if not vectors:
                raise ValueError("No vectors created successfully")

            # Step 3: Upload to pinecone
            print("\nStep 3: Uploading to Pinecone")
            stats = self.upload_vectors(vectors=vectors)

            # Step 4: Get the final index statistics
            print("\nStep 4: Getting index statistics")
            self.get_index_stats()

            print(f"\n🎉 Data ingestion completed successfully!")
            return stats

        except Exception as e:
            print(f"\n💥 Data ingestion failed: {str(e)}")
            raise


def get_config() -> DataIngestion:
    return DataIngestionConfig(
        pinecone_api_key=os.getenv("PINECONE_API_KEY"),
        pinecone_environment=os.getenv("REGION"),
        index_name=os.getenv("INDEX_NAME"),
        embedding_model=os.getenv("EMBEDDING_MODEL", "all-MiniLM-L6-v2"),
        embedding_dimension=int(os.getenv("EMBEDDING_DIMENSION", "384")),
        batch_size=int(os.getenv("BATCH_SIZE", "100"))
    )


def main():
    """Main execution function"""
    try:
        # Step 1: Create and validate configuraiton
        print("Creating configuration...")
        config = get_config()
        
        # Step 2: Initialize data ingestion
        print("Initializing the data ingestion...")
        ingestion = DataIngestion(config=config)
        
        # Step 3: Get the data source
        data_source = DataSource(file_path=os.getenv("DATA_SOURCE_FILE_PATH", "data/gpt_data.json"))
    
        # Step: 4 Run the complete ingestion pipeline
        stats = ingestion.run_full_ingestion(data_source=data_source)
    
        if stats:
            print(f"\n✨ Final Results:")
            print(f"  📊 Total processed: {stats.total_items}")
            print(f"  ✅ Successful: {stats.successful_items}")
            print(f"  ❌ Failed: {stats.failed_items}")
            print(f"  ⏱️  Total time: {stats.processing_time}s")
        else:
            print("\n✨ Final Results: No stats available due to an error.")

    except ValidationError as e:
        print(f"❌ Configuration validation error:")
        for error in e.errors():
            print(f"  - {error['loc'][0]}: {error['msg']}")
    except Exception as e:
        print(f"💥 Error: {str(e)}")


if __name__ == "__main__":
    load_dotenv()  # Load env variables

    # # Logger config
    # logger = logging.getLogger()
    # logger.setLevel(logger.info)
    # formatter = logging.Formatter("%(asctime)s %(levelname)s %(message)s")
    # log_timestamp = time.strftime("%Y%m%d_%H$M%S")

    # Run the main function
    main()
