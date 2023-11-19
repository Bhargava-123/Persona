# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from predict import tellmemyMBTI

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

#I dont think anyone would be able to live 300 years i am not talking about the physical 
@app.post("/get-persona-analytics")
def get_home(item: Item):
    #if username doesnt exist already
    #open a text file
    if os.path.exists(f'./scrapped_pages/{item.text}.txt'):
        prediction_values = tellmemyMBTI([item.text])
        ele = prediction_values
        # print(ele[0].tolist())
        # print(ele[1].tolist())
        # print(ele[2])

        return {
            "data" : prediction_values
        }
    else:
        print("Does not exists")
        open(f'./scrapped_pages/{item.text}.txt','w')
        #get text data by scraping
    

    #do perdiction

    #send results in return for showing graphs
    return item

@app.get("/get-recents")
def get_recents():
    list_of_files = os.listdir("./scrapped_pages")
    return {"data" : list_of_files}

class fileNameModel(BaseModel):
    fileName : str 

@app.post("/get-analytics")
def get_analytics(fileNameModel : fileNameModel):
    with open(f"./scrapped_pages/{fileNameModel.fileName}",'r') as file:
        text = file.read()
        prediction_values = tellmemyMBTI(text)
        intj = prediction_values[0].tolist()
        esfp = prediction_values[1].tolist()
        type = prediction_values[2]
        print(prediction_values)

        return{
            "ie" : [intj[0],esfp[0]],
            "ns" : [intj[1],esfp[1]],
            "tf" : [intj[2],esfp[2]],
            "jp" : [intj[3],esfp[3]],
            "intj" : intj,
            "esfp" : esfp,
            "type" : type
        }
        
        
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='localhost')

# uvicorn main:app --reload --reload-include predict.py