from chempy import balance_stoichiometry

from BackendHelperFuncs import helper_funcs

def stoic_knowledge_text():
    TEST_reacs_formula = "Fe2O3 + CO"
    TEST_prods_formula = "Fe + CO2"

    output_start_formula = TEST_reacs_formula + " ---> " + TEST_prods_formula

    reactants = TEST_reacs_formula.replace(' ', '').split("+")
    products = TEST_prods_formula.replace(' ', '').split("+")

    reac, prod = balance_stoichiometry({reactants[0], reactants[1]}, {products[0], products[1]})

    # reac, prod = balance_stoichiometry(reac_dict, prod_dict)

    output = ""
    output = helper_funcs.parse_stoic_output(reac, output)
    output += ' -> '
    output = helper_funcs.parse_stoic_output(prod, output)

    # output_reac_dict = {}
    # for reac in reactants:
    #     pass

    # output_prod_dict = {}
    # for prod in products:
    #     pass

    # output = ""
    # formula = helper_funcs.parse_stoic_output()

    output = {
        'formula': output_start_formula,
        'answer': output
    }

    return stoic_knowledge_text

def main():
    stoic_knowledge_text()

main()

