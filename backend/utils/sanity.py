import os
import httpx
from dotenv import load_dotenv

load_dotenv()
PROJECT_ID=os.getenv("SANITY_PROJECT_ID")
DATASET=os.getenv("SANITY_PROJECT_DATASET")
TOKEN=os.getenv("SANITY_API_TOKEN")

SANITY_API_URL = f"https://{PROJECT_ID}.api.sanity.io/v2023-06-25/data/query/{DATASET}"


HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {TOKEN}"
}

async def run_queries(q:str):
    async with httpx.AsyncClient() as client:
        response = await client.get(SANITY_API_URL, params={"query": q}, headers=HEADERS)
        response.raise_for_status()
        return response.json()
    
