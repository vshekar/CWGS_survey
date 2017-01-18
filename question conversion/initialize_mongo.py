from pymongo import MongoClient
import json

"""
This script initializes the mongo db
"""

client = MongoClient('localhost', 27017)
database = client["survey"]

q_set = database.questions

file_list = ['CISS_questions.json', 'ARP_questions.json', 'epp_questions.json', 'SMP_questions.json']

for f in file_list:
    print(f)
    fl = open(f,'r')    
    questions = json.load(fl)
    q_set.insert_one(questions)
    fl.close()
