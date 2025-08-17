import csv
import json
import os

# Set file paths here
CSV_FILE_PATH = 'data/gpt_data.csv'  
JSON_FILE_PATH = 'data/gpt_data.json'  

def csv_to_json(csv_path, json_path):
    print(f"🔄 Converting {csv_path} to {json_path}")
    data = []
    with open(csv_path, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
			# Only keep 'input' and 'output' columns
            item = {
				'input': row.get('input'),
				'output': row.get('output')
			}
            data.append(item)
    with open(json_path, 'w', encoding='utf-8') as jsonfile:
        json.dump(data, jsonfile, ensure_ascii=False, indent=2)
  
    print(f"✅ Data successfully written to {json_path}")

if __name__ == '__main__':
    
    os.makedirs(os.path.dirname(JSON_FILE_PATH), exist_ok=True)
    csv_to_json(CSV_FILE_PATH, JSON_FILE_PATH)
