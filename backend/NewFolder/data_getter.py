from chempy.util import periodic



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


get_periodic_dict()