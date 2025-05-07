## code for backend :
```python

# ____ Importing the FastAPI library ____
from fastapi import FastAPI, Response, Cookie

# ____ Importing functions ____
from api.hello import hello_world
from api.dynamic import dynamic_item
from api.create import createItem
from api.delete import delete_item
from api.update import update_item

# ____ Importing schemas ____
from schemas import Item

# ____ importing utilities _____
from utils import generate_token 

app = FastAPI()

@app.get("/")
def root():
    return hello_world()

@app.get("/items/{item_id}")
def root(item_id:str):
    return dynamic_item(item_id)

@app.get("/set-cookie")
async def set_cookie(response: Response):
    response.set_cookie(
        key="token",
        value=generate_token(),
        httponly=True,
        max_age=3600
    )
    return {"message": "Cookie set"}

@app.get("/delete-cookie")
def delete_cookie(response:Response):
    response.delete_cookie(key="token")
    return {"message":"cookie deleted successfully"}

@app.get("/send-cookie")
def check_cookie(token:str = Cookie(default=None)):
    if token is not None:
        print(token)
        
@app.post("/create")
def root(item:Item):
    return createItem(item)

@app.delete('/delete')
def root(item:Item):
    return delete_item(item)

@app.patch("/update")
def root(item:Item):
    return update_item(item)

```