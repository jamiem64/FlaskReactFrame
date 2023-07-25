from chempy.util import periodic



def get_periodic_dict():
    output = {}
    for i in range(len(periodic.names)):
        tmp = {}
        tmp['name'] = periodic.names[i]
        tmp['symbol'] = periodic.symbols[i]
        tmp['ram'] = periodic.relative_atomic_masses[i]
        output[i] = tmp
    print(output)

def get_periodic_table():
    return periodic.groups

get_periodic_dict()