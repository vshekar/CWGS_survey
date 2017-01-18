

ipfile = open('epp_questions.txt', 'r')
opfile = open('epp.json','w')
lines = []
qnum = 1
opfile.write('"questions": [')
for line in ipfile.readlines():
    
    l = '{ "type": "radiogroup", "name": "q'+ str(qnum) + '", "title": "'+ line.rstrip() + '", "isRequired": true, "choices": ["Yes","No"] }, \n{ "type": "radiogroup", "name": "q'+ str(qnum) + 'a", "title": "Where is information about resources located?", "isRequired": true, "visibleIf": "{q'+ str(qnum) + '}=\'Yes\'","choices": ["Internet","Print","Verbal","N/A"] },'
    opfile.write(l + "\n")
    qnum += 1
opfile.write("]")

ipfile.close()
opfile.close()
