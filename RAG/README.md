# RAG Pipeline 🤖📚

Welcome to the **RAG Pipeline**! This is where the magic of data ingestion and transformation happens. Buckle up, because you're about to dive into a world of CSVs, JSONs, and Python scripts. Let's make data dance! 💃🕺

Please note the project is configured for 3072 token dimension and gemini-embedding model, modification on models and embedding needs to updated if you want to use other embedding models and dimension configuration.

## 🚀 Quick Start Guide

1. **Clone the Repository** 🐑:

   ```bash
   git clone https://github.com/scienmanas/Portfolio.git
   cd Portfolio/RAG
   ```
2. **Set Up the Environment** 🌱:

   - Install Python (if you haven't already). We recommend using Python 3.9+ 🐍.
   - Create a virtual environment:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
3. **Configure Secrets** 🔒:

   - Rename `.env.example` to `.env` and fill in the required values. Don't worry, we won't judge your API keys. 😜
4. **Run the Scripts** 🏃‍♂️:

   - Convert CSV to JSON:
     ```bash
     python scripts/csv_to_json.py
     ```
   - Ingest data:
     ```bash
     python data_ingestion.py
     ```

## 📂 Project Structure

Here's what you'll find in this folder:

- **`data/`**: Where the raw and processed data lives. 🗂️
- **`scripts/`**: Handy Python scripts to make your life easier. 🐍
- **`data_ingestion.py`**: The main script to ingest data. Think of it as the star of the show. 🌟
- **`.env`**: Your secret keeper. 🤫
- **`pyproject.toml`**: Project configuration file. Fancy, right? 😎

## 🔑 Environment Variables

To get started, you'll need to set up a `.env` file in the root of the `RAG` folder. Here's what it should include:

```env
PINECONE_API_KEY=your_pinecone_api_key_here
GEMINI_API_KEY=your_gemini_api_key
INDEX_NAME=index_name_here
CLOUD_PROVIDER=your_cloud_provider_here(eg. aws, gcp)
REGION=your_region_here(eg. us-east-1)
EMBEDDING_MODEL=gemini-embedding-001
EMBEDDING_DIMENSION=3072
BATCH_SIZE=100(general recommendation is 100)
```

## 📊 Data Requirements

To ensure everything runs smoothly, here's how your data should look:

1. **CSV Format** 📄:

   - The CSV file should have a header row with column names.
   - Ensure there are no empty rows or columns. Clean data = Happy scripts! 😄
   - Save your file in the `data/` folder as `gpt_data.csv`.
2. **JSON Output** 🛠️:

   - The JSON file will be generated in the `data/` folder as `gpt_data.json`.
   - Each row in the CSV will be converted into a JSON object. Simple, right? 😎

## 🕒 When to Run `csv_to_json.py`

Run the `csv_to_json.py` script whenever:

- You add new data to the `gpt_data.csv` file.
- You make changes to the existing data in the CSV file.
- You want to ensure the JSON file is up-to-date with the latest CSV data.

To run the script, use this command:

```bash
python scripts/csv_to_json.py
```

Pro Tip: Always double-check your CSV file before running the script. Garbage in, garbage out! 🗑️➡️🚀

## 🛠️ Troubleshooting

- **Dependency Issues?** 🤔
  Run this command to update everything:

  ```bash
  pip install --upgrade pip setuptools wheel
  ```
- **Script Not Working?** 😱
  Double-check your `.env` file and ensure all required values are set. If all else fails, blame the computer. 💻

## 🥳 Contributing

Want to make this project even better? Fork it, make your changes, and submit a pull request. We'll review it faster than you can say "merge conflict." 😅

## 📜 License

This project is licensed under the MIT License. Because sharing is caring. ❤️
