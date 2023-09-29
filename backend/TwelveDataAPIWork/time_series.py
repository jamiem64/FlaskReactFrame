import requests

headers = {
	"X-RapidAPI-Key": "1b83c9c51dmshe36ca684bbe69b3p14bfa3jsn49b6f9b817e0",
	"X-RapidAPI-Host": "twelve-data1.p.rapidapi.com"
}

def get_time_series(
        symbol: str,    
    ):
    url = "https://twelve-data1.p.rapidapi.com/time_series"

    querystring = {"symbol":symbol,"interval":"1day","outputsize":"30","format":"json"}


    response = requests.get(url, headers=headers, params=querystring)

    print(response.json())


def main():
    get_time_series('AAPL')

main()