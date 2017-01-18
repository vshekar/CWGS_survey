from pymongo import MongoClient

import os
import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.options
import logging
from tornado.log import enable_pretty_logging
import json
from  tornado.escape import json_decode

from tornado.options import define, options

define("port", default=8888, help="Run the server on the given port", type=int)

class Application(tornado.web.Application):
    def __init__(self):
        enable_pretty_logging()
        settings = {
            'autoescape': None,
            'debug': True, 
            'static_path': os.path.join(os.getcwd(), 'scripts')
            }
        
        handlers = [
            (r"/", MainHandler),
            (r'/scripts/(.*)', tornado.web.StaticFileHandler, {'path': os.path.join(os.getcwd(), 'scripts')}),
            (r'/css/(.*)', tornado.web.StaticFileHandler, {'path': os.path.join(os.getcwd(), 'css')}),
            (r'/survey/(.*)', SurveyHandler),
        ]
        
        
        tornado.web.Application.__init__(self, handlers, **settings)
        
        self.client = MongoClient('localhost', 27017)
        self.database = self.client["survey"]
        self.questions = self.database["questions"]
        self.responses = self.database["responses"]

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        codes = []
        names = []
        for qset in self.application.questions.find():
            codes.append(qset["set_id"])
            names.append(qset["set_name"])
                         
        self.render("./templates/home.html",title="Home",survey_codes=codes, survey_names=names)

class SurveyHandler(tornado.web.RequestHandler):
    def get(self,survey):
        qset = self.application.questions.find({'set_id':survey})
        questions = json.dumps(qset[0]["questions"])
        sid = qset[0]["set_id"]
        self.render("./templates/survey.html",title="Survey",questions=questions, survey_id=sid)
        #self.write(name)
        
    def post(self,data):
        #data = json.loads(data)
        #logging.debug(data)
        data = json_decode(self.request.body)
        self.application.responses.insert_one(data)

if __name__ == "__main__":
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
