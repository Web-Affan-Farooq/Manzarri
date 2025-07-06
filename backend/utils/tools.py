## _____ Python libraries ...
import os
from dataclasses import dataclass

## _____ Packages ...
from dotenv import load_dotenv
import httpx
from agents import Agent, Runner, function_tool
from agentsdk_gemini_adapter import config

## _____ Schemas ...
from schemas import DeleteAccountRequestBody , BlockAccountRequestBody ,UpdateQuantityRequestBody

## ____ Load enviroments ...
load_dotenv()
PROJECT_ID=os.getenv("SANITY_PROJECT_ID")
DATASET=os.getenv("SANITY_PROJECT_DATASET")
TOKEN=os.getenv("SANITY_API_TOKEN")

@function_tool
class ManzarriTools():
    """ This is the tool box that can contain essential tools for my agent to handle administration """
    
    MUTATION_URL = f"https://{PROJECT_ID}.api.sanity.io/v2023-06-25/data/mutate/{DATASET}"

    HEADERS = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {TOKEN}"
    }

    async def block_account(self,body:BlockAccountRequestBody):
            """use this function for blocking an user's account in sanity datasets """
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
                res = await client.post(self.MUTATION_URL, headers=self.HEADERS, json=payload)
                # print("Response : ",res)
                res.raise_for_status()
                return res.json()
    
    async def handle_account_delete(self,body:DeleteAccountRequestBody):
            """use this function for deleting an user's account in sanity datasets Note: only delete account when you recieve a suspicious activity or any activity that's against online shopping rules"""
            payload = {
        "mutations":[
            {
                "delete":{
                    "id":body.id_,
                }
            }
        ]
    }
            async with httpx.AsyncClient() as client:
                res = await client.post(self.MUTATION_URL, headers=self.HEADERS, json=payload)
                res.raise_for_status()
                return res.json()
    
    async def handle_update_stock_quantity(self,body:UpdateQuantityRequestBody):
            """use this function for updating product's quantity in sanity datasets"""
            payload = {
        "mutations": [
            {
                "patch":{
                    "id":body.id_,
                    "set":{
                        "stockQuantity":body.quantity,
                    }
                }
            }
        ]
    }
            async with httpx.AsyncClient() as client:
                res = await client.post(self.MUTATION_URL, headers=self.HEADERS, json=payload)
                # print("Response : ",res)
                res.raise_for_status()
                return res.json()
        
# from agents import Agent , Runner
# from agentsdk_gemini_adapter import config
# from dataclasses import dataclass

# @dataclass
# class ManzarriAssistant():
#     def hello_agent(self):
#         agent = Agent(
#             name="Greetings agent",
#             instructions="Say hello"
#         )
#         result = Runner.run_sync(agent,"Hello my dear! good evening.",run_config=config)
#         return print("Agent response : ",result.final_output)

# ecommerce_agent = ManzarriAssistant()
# ecommerce_agent.hello_agent()
