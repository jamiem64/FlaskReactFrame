import requests

from global_rate_limit import check_limit
import db_actions

"""
link to API i am using:

https://rapidapi.com/twelvedata/api/twelve-data1
"""

headers = {
	"X-RapidAPI-Key": "1b83c9c51dmshe36ca684bbe69b3p14bfa3jsn49b6f9b817e0",
	"X-RapidAPI-Host": "twelve-data1.p.rapidapi.com"
}

def get_stocks_info():
    output = []
    stocks_list = get_stocks_list()
    for i, item in enumerate(stocks_list.get('data')[400:1000]): # [x:y] to grab subset of total records
        item = get_stocks_logo(item)
        output.append(item)
        print(f"Processing record {i} of {len(stocks_list.get('data'))}")
    return output

def get_stocks_list():
    check_limit()
    url = "https://twelve-data1.p.rapidapi.com/stocks"
    querystring = {"exchange":"NASDAQ","format":"json"}
    response = requests.get(url, headers=headers, params=querystring)

    return response.json()

def get_stocks_logo(item):
    check_limit()
    symbol = item.get('symbol')
    url = "https://twelve-data1.p.rapidapi.com/logo"
    querystring = {"symbol":symbol}
    response = requests.get(url, headers=headers, params=querystring).json()
    item['url'] = response.get('url')

    return item

def prepare_for_db(stocks_list):
    values_output = []
    col_names_output = []
    for record in stocks_list:
        tmp = ()
        for k, v in record.items():
            if k not in col_names_output:
                col_names_output.append(k)
            tmp = tmp + (v, )
        values_output.append(tmp)
    return values_output, col_names_output
            

def main():
    stocks_list = get_stocks_info()
    values, col_names = prepare_for_db(stocks_list)
    db_actions.add_to_table('stocks_info', col_names, values)

main()
