from pymongo import MongoClient

MONGO_DB_HOST = "localhost"
MONGO_DB_PORT = 27017
DB_NAME = "daily-news"

client = MongoClient(MONGO_DB_HOST, MONGO_DB_PORT)

#recommend to use snake cause because this module is a simulator, not a class
def get_db(db=DB_NAME):
    db = client[db]
    return db

