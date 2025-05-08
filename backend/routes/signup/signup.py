from fastapi import APIRouter

# ____ importing custom class
from routes.Auth import AUTH

# _____ Importing pydantic type
from schema import SignupUser

router = APIRouter()
authmodel = AUTH()

@router.post("/create-account")
def create_account(user:SignupUser):
    return authmodel.Signup(user)