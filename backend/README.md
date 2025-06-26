## Docs :

#### Create document :
```python
import httpx, os
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("SANITY_TOKEN")
PROJECT_ID = os.getenv("SANITY_PROJECT_ID")
DATASET = os.getenv("SANITY_DATASET")

MUTATION_URL = f"https://{PROJECT_ID}.api.sanity.io/v2023-06-25/data/mutate/{DATASET}"

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
}

async def create_document(doc: dict):
    payload = {
        "mutations": [
            {"create": doc}
        ]
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(MUTATION_URL, headers=HEADERS, json=payload)
        res.raise_for_status()
        return res.json()

```

#### update document 
```python 
async def update_document(document_id: str, fields: dict):
    payload = {
        "mutations": [
            {"patch": {
                "id": document_id,
                "set": fields
            }}
        ]
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(MUTATION_URL, headers=HEADERS, json=payload)
        res.raise_for_status()
        return res.json()

```

#### delete document
```python
async def delete_document(document_id: str):
    payload = {
        "mutations": [
            {"delete": {
                "id": document_id
            }}
        ]
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(MUTATION_URL, headers=HEADERS, json=payload)
        res.raise_for_status()
        return res.json()
```