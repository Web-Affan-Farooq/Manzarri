import os
from dotenv import load_dotenv
from schemas import BlockAccountRequestBody
import httpx

## ____ Load enviroments ...
load_dotenv()
PROJECT_ID=os.getenv("SANITY_PROJECT_ID")
DATASET=os.getenv("SANITY_PROJECT_DATASET")
TOKEN=os.getenv("SANITY_API_TOKEN")

    
MUTATION_URL = f"https://{PROJECT_ID}.api.sanity.io/v2023-06-25/data/mutate/{DATASET}"

HEADERS = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {TOKEN}"
    }

async def handle_account_block(body:BlockAccountRequestBody):
          # return {"body":body}

    payload = {
        "mutations":[
            {
                "patch":{
                    "id":body.id_,
                    "set": {
                        "isBlocked":body.block,
                    }
                }
            }
        ]
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(MUTATION_URL, headers=HEADERS, json=payload)
        # print("Response : ",res)
        res.raise_for_status()
        return res.json()