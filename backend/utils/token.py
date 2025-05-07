import random
import string

def generate_token(length: int = 200) -> str:
    characters = string.ascii_letters + string.digits  # a-z, A-Z, 0-9
    return ''.join(random.choices(characters, k=length))
