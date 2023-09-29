import requests

headers = {
	"X-RapidAPI-Key": "1b83c9c51dmshe36ca684bbe69b3p14bfa3jsn49b6f9b817e0",
	"X-RapidAPI-Host": "twelve-data1.p.rapidapi.com"
}

def get_stock_movers():
    url = "https://twelve-data1.p.rapidapi.com/market_movers/stocks"
    response = requests.get(url, headers=headers)
    print(response.json())
    return

def main():
    get_stock_movers()

main()