import uuid
import os
from typing import List, Dict, Optional, Union
from pydantic import BaseModel, Field, ValidationError, field_validator
from pathlib import Path
import pinecone
# from sentence_transformers import SentenceTransformer

# Pydantic Models for data validation
class InputOutputPair (BaseModel):
    input: str = Field(..., min_length=1, max_length=5000, description="Input text/question")
    output: str = Field(..., min_length=1, max_length=5000, description="Output text/answer")
    metadata: Optional[Dict[str, Union[str, int, float]]] = Field(default_factory=dict, description="Additional metadata")
    
    @field_validator('input', 'output')
    @classmethod
    def validate_text_not_empty (cls, v: str) :
        if not v.strip() :
            raise ValueError('Text cannot be empty or just whitespace')
        return v.strip()


class PineconeVector(BaseModel):
    id: str = Field(..., description="Union Vector ID")
    values: List[float] = Field(..., min_items=1, description="Embedding values")
    metadata: Dict[str, Union[str, int, float]] = Field(..., description="Vector metadata")

    @field_validator('values')
    @classmethod
    def validate_values(cls, v) :
        if not all(isinstance(val, (int, float)) for val in v) :
            raise ValueError("All embedding values must be numeric")
        return v

class DataIngestion :
    def __init__(self) -> None:
        # Initialise pinecone
        self.pinecone_api_key = ""
        