from chempy import balance_stoichiometry
from pprint import pprint

from BackendHelperFuncs import helper_funcs

def test_mass_balance(reac_dict, prod_dict):
    reac, prod = balance_stoichiometry(reac_dict, prod_dict)
    pprint('Reactants:')
    pprint(dict(reac))

    pprint('Products:')
    pprint(dict(prod))

def two_reacs_two_prods_bal(reac_dict, prod_dict):

    # def parse_stoic_output(input, output):
    #     i = 1
    #     for key, value in input.items():
    #         output += f"{value}{key}"
    #         if i < len(input):
    #             output += ' + '
    #         i += 1
    #     return output

    output = ""
    reac, prod = balance_stoichiometry(reac_dict, prod_dict)
    
    output = helper_funcs.parse_stoic_output(reac, output)

    output += ' -> '

    output = helper_funcs.parse_stoic_output(prod, output)

    return output

def main():
    two_reacs_two_prods_bal({'NH4ClO4', 'Al'}, {'Al2O3', 'HCl', 'H2O', 'N2'})

main()