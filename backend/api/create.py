from schemas import Item
def createItem(item:Item):
    return {
        "message":"Successfully attemped post request !",
        "data":item,
    }
    