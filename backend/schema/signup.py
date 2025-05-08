from pydantic import BaseModel

class SignupUser(BaseModel):
    user_name:str
    email:str
    password:str