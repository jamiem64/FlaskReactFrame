from flask import Flask, request
from flask import jsonify
from flask_cors import CORS
import logging
import requests
import json

from NewFolder import data_getter
from ToolFunctions import mass_balance_solver
from TestFunctions import stoic_balance_test

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

@app.route("/Tools/StoicSolver", methods=["POST"], strict_slashes=False)
def MassBalanceSolver():
  reac1 = request.json['reac1'] # obtain reactants + products from incoming request
  reac2 = request.json['reac2']
  prod1 = request.json['prod1']
  prod2 = request.json['prod2']

  output_str = mass_balance_solver.two_reacs_two_prods_bal( # pass vars to func to get balanced rxn as str
    {reac1, reac2}, 
    {prod1, prod2}, 
    )
  
  output = { # construct output of endpoint
    'output': output_str,
    'status': 'success',
  }
  
  return jsonify(output)

@app.route("/Tests/StoicBalanceTest", methods=["GET"], strict_slashes=False)
def StoicBalanceKnowledgeTest():
  # reac1 = request.json['reac1'] # obtain reactants + products from incoming request
  # reac2 = request.json['reac2']
  # prod1 = request.json['prod1']
  # prod2 = request.json['prod2']

  # output_str = mass_balance_solver.two_reacs_two_prods_bal( # pass vars to func to get balanced rxn as str
  #   {reac1, reac2}, 
  #   {prod1, prod2}, 
  #   )

  output = stoic_balance_test.stoic_knowledge_text()

  output = { # construct output of endpoint
    'output': output,
    'status': 'success',
  }
  
  # return jsonify(output)
  return json.dumps(output)
  
# @app.route('/GetElementsArray')
# def get_elements():
#     # Call the API endpoint
#     response = requests.get('https://periodic-table-elements-info.herokuapp.com/elements')

#     # Check if the response was successful
#     if response.status_code == 200:
#         # Return the JSON data
#         return jsonify(response.json())
#     else:
#         # Return an error message
#         return 'Error: Failed to retrieve data from API'

if __name__ == "__main__":
  app.run()