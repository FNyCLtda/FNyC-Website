import os
import json

BASE_DIR = "docs"
OUTPUT_FILE = "docs/data/docs.json"

docs = []

for root, _, files in os.walk(BASE_DIR):
    for file in files:
        if file.endswith((".pdf", ".png", ".jpg", ".html")):
            path = os.path.join(root, file).replace("\\", "/")
            docs.append({
                "name": file,
                "path": "/" + path
            })

os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(docs, f, indent=2, ensure_ascii=False)

print(f"✔ {len(docs)} documentos indexados")
