import os
import requests

# ____ importing pydantic schemas ...
from schema import SignupUser
from schema import LoginUser

# _____ For loading enviroment variables
from dotenv import load_dotenv

load_dotenv()

class AUTH():
    # ____ Handling Signup  
    def Signup(user:SignupUser):
        url = "https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production?query=*[0]"
        headers = {
         "Authorization":f"Bearer {os.getenv("SANITY_API_TOKEN")}",
         "Content-Type":"application/json"   
        }
        account = {
            "mutations":[
                {
                    "create":{
                        "_type":"Accounts",
                        "userName":"",
                        "userPassword":"",
                        "userEmail":"",
                        "userToken":"",
                    }
                }
            ]
        }
        response = requests.get()
    
    # ____ Handling Login  
    def Login(user:LoginUser):
        pass