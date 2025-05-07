from schemas import Item

def update_item(item:Item):
    return {
        "message":"Successfully handles patch request",
        "data":item,
    }