from schemas import Item

def delete_item(item:Item):
    return {
        "message":"Successfully handles delete request !",
        "data":item,
    }