import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

def mongo(collection_name):
    client = pymongo.MongoClient(os.getenv("MONGODB_URI"))
    db = client["apuro"]
    collection = db[collection_name]
    return collection

