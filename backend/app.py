from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/InitGame")
def InitGame():
	output = {
		'village_info': {
			'name': 'Test Name',
			'pop': '4',
		},
		'village_store': {
			'food': '20',
			'water': '20',
			'wood': '20',
			'stone': '20',
		},
		'village_production': {
			'food_prod': '1',
			'water_prod': '1',
			'wood_prod': '1',
			'stone_prod': '1',
		},
		'world_info': {
			'week_no': '1',
		}
	}
	return jsonify(output)

if __name__ == "__main__":
  	app.run()