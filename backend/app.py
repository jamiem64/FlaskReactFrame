from flask import Flask
from flask import jsonify
from flask_cors import CORS

from TwelveDataAPIWork.db_actions import get_full_table

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/test")
def hello():

  return jsonify({'text': 'bazinga'})

@app.route("/GetStocksInfo")
def GetStocksInfo():
  df = get_full_table('stocks_info')
  return jsonify(df)

if __name__ == "__main__":
  app.run()