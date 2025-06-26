from fastapi import FastAPI

## _____ Schemas ...
from schemas import BlockAccountRequestBody, UpdateQuantityRequestBody, DeleteAccountRequestBody

## ____ Importing routes ...
from routes import handle_update_stock_quantity, handle_account_block, handle_account_delete

app = FastAPI()

## ____ Route for handling account block
@app.patch("/block-account")
async def account_block(body:BlockAccountRequestBody):
    return await handle_account_block(body)

## ____ Route for handling account delete
@app.delete("/delete-account")
async def delete_account(body:DeleteAccountRequestBody):
    return await handle_account_delete(body)
       
## ____ Route for stock quantity update
@app.patch("/update-quantity")
async def handle_quantity_update(body:UpdateQuantityRequestBody):
    return await handle_update_stock_quantity(body)