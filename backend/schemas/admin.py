from pydantic import BaseModel, Field

class DeleteAccountRequestBody(BaseModel):
    id_:str = Field(alias="_id")
    
class BlockAccountRequestBody(BaseModel):
    id_: str = Field(alias="_id")
    block: bool

class UpdateQuantityRequestBody(BaseModel):
    id_:str = Field(alias="_id"),
    quantity:int