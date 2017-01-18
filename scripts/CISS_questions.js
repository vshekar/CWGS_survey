var questions = {
        title: "Crisis Intervention Services for Students",
        pages: [
            { title: "",
              questions: [
                    { type: "radiogroup", name: "q1", title: "Does the university offer a crisis intervention team that responds to sexual assaults on campus? (Crisis intervention would include an on-call, 24-hour emergency staff available to assist students who have experienced sexual assault.)", isRequired: true, choices: ["Yes","No"] },
                    { type: "radiogroup", name: "q1a", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q1}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] },
    
                    { type: "radiogroup", name: "q2", title: "Does the campus identify and provide contact information for trained on- and off-campus advocates and counselors who can provide an immediate, confidential crisis-response in a crisis situation?", isRequired: true, 
                    choices: ["Yes","No"] },
                    { type: "radiogroup", name: "q2a", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q2}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] },
                    
                    { type: "radiogroup", name: "q3", title: "Is there an anonymous hotline that students can call to get information about available resources regarding sexual violence either on campus or in the community?", isRequired: true, 
                    choices: ["Yes","No"] },
                    { type: "radiogroup", name: "q3a", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q3}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] }
              ]
            },
            { title: "Mental Health Services",
                questions: [
                    { type: "checkbox", name: "q4", title: "Does the university offer students a confidential space for sexual violence disclosure either in the form of:", isRequired: true,  choices: ["A crisis center","Staff member protected by confidentiality statuses","Representative from community-based center with such privileges who works part-time on campus","No resources available"] },
                    { type: "radiogroup", name: "q4b", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q4}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] },
                    
                    { type: "radiogroup", name: "q5", title: "If the answer to the previous question is no, does the campus have a collaborative relationship with community partners that can respond to sexual violence?", isRequired: true, visibleIf: "{q4}='No resources available'", 
                    choices: ["Yes","No"] },
                    { type: "radiogroup", name: "q5a", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q5}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] },
                    
                    { type: "radiogroup", name: "q6", title: "Does the university offer free and confidential counseling for students who experience sexual assault?", isRequired: true, 
                    choices: ["Yes","No"] },
                    { type: "radiogroup", name: "q6a", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q6}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] },
                    
                    { type: "radiogroup", name: "q7", title: "Does the university offer free and confidential longterm counseling and assistance for students who experience sexual assault?", isRequired: true, 
                    choices: ["Yes","No"] },
                    { type: "radiogroup", name: "q7a", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q7}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] },
                    
                    { type: "radiogroup", name: "q8", title: "Does the university offer support groups for students who have experienced sexual assault?", isRequired: true, 
                    choices: ["Yes","No"] },
                    { type: "radiogroup", name: "q8a", title: "Where is information about resources located?", isRequired: true, visibleIf: "{q8}='Yes'",
                    choices: ["Internet","Print","Verbal","N/A"] }
                ]
            }
        ]
    
}


