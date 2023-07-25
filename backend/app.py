from flask import Flask
from flask import jsonify
from flask_cors import CORS

from NewFolder import data_getter

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/test")
def test():
  text_str = data_getter.TEST_get_string_elems()
  return jsonify({'output': text_str})

@app.route("/PeriodicElemsDict")
def PeriodicElemsDict():
  output = data_getter.get_periodic_dict()
  return jsonify({'output': output})

if __name__ == "__main__":
  app.run()