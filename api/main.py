# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

# Initializing the fast API server
app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#this is the json request that is needed
class Item(BaseModel):
    text : str


@app.post("/home")
def get_home(item: Item):
    item.text = item.text + 'I added this in backend'
    return item

@app.get("/get-recents")
def get_recents():
    list_of_files = os.listdir("./scrapped_pages")
    print(list_of_files)
    return {"data" : list_of_files}

    return file
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='localhost')