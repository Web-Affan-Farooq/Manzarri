from pydantic import BaseModel

class Item(BaseModel):
    item_name:str
    _id:int