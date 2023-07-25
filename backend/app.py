from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/test")
def hello():

  return jsonify({'text': 'bazinga'})

if __name__ == "__main__":
  app.run()