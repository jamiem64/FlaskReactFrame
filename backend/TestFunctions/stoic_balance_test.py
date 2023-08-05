from chempy import balance_stoichiometry
import json

from BackendHelperFuncs import helper_funcs

def stoic_knowledge_text():
    TEST_reacs_formula = "Fe2O3 + CO"
    TEST_prods_formula = "Fe + CO2"

    output_start_formula = TEST_reacs_formula + " ---> " + TEST_prods_formula

    reactants = TEST_reacs_formula.replace(' ', '').split("+")
    products = TEST_prods_formula.replace(' ', '').split("+")

    reac, prod = balance_stoichiometry({reactants[0], reactants[1]}, {products[0], products[1]})

    answer = {
        'reactants': [],
        'products': []
    }
    for key, value in reac.items():
        tmp = {}
        tmp[key] = str(value)
        answer['reactants'].append(tmp)

    for key, value in prod.items():
        tmp = {}
        tmp[key] = str(value)
        answer['products'].append(tmp)


    # reac, prod = balance_stoichiometry(reac_dict, prod_dict)

    output = ""
    output = helper_funcs.parse_stoic_output(reac, output)
    output += ' -> '
    output = helper_funcs.parse_stoic_output(prod, output)

    output_dict = {
        'question_str': output_start_formula,
        'answer_str': output,
        'answer_json': answer
    }

    # output = [output_dict]

    return output_dict

def test_function():
    return "Test Success"

    # output_reac_dict = {}
    # for reac in reactants:
    #     pass

    # output_prod_dict = {}
    # for prod in products:
    #     pass

    # output = ""
    # formula = helper_funcs.parse_stoic_output()

# def main():
#     stoic_knowledge_text()

# main()

