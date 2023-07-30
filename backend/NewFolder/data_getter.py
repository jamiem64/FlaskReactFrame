from chempy.util import periodic
import requests
# import jsonify

def get_periodic_dict():  
    output = []
    for i in range(len(periodic.names)):
        tmp = {}
        tmp['number'] = i
        tmp['name'] = periodic.names[i]
        tmp['symbol'] = periodic.symbols[i]
        tmp['ram'] = periodic.relative_atomic_masses[i]
        output.append(tmp)
    return output

def get_periodic_table():
    return periodic.groups

def TEST_get_string_elems():
    output = ""
    for i in range(len(periodic.names)):
        output += periodic.names[i] + ", "

    return output

# def get_elements():
#     response = requests.get('https://periodic-table-elements-info.herokuapp.com/elements')
#     data = response.json()

#     # Check if the response was successful
#     if response.status_code == 200:
#         return 'Success'
#         # Return the JSON data
#         # return jsonify(response.json())
#     else:
#         # Return an error message
#         return 'Error: Failed to retrieve data from API'

# get_periodic_dict()

# def main():
#     # print(get_periodic_table())
#     # get_elements()

# main()