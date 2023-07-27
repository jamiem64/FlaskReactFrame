from flask import Flask, request
from flask import jsonify
from flask_cors import CORS
import logging

from NewFolder import data_getter
from ToolFunctions import mass_balance_solver

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

@app.route("/MassBalanceSolver", methods=["POST"], strict_slashes=False)
def MassBalanceSolver():
  reac1 = request.json['reac1']
  reac2 = request.json['reac2']
  prod1 = request.json['prod1']
  prod2 = request.json['prod2']

  rxn_contents = {
    'reac1': reac1,
    'reac2': reac2,
    'prod1': prod1,
    'prod2': prod2,
  }
  output_str = mass_balance_solver.two_reacs_two_prods_bal(
    {rxn_contents['reac1'], rxn_contents['reac2']}, 
    {rxn_contents['prod1'], rxn_contents['prod2']}, 
    )
  
  output = {
    'output': output_str,
    'status': 'success',
  }
  logging.debug(output)
  print(output)
  
  return jsonify(output)
  

if __name__ == "__main__":
  app.run()