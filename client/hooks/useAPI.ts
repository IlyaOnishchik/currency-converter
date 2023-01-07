
export const useAPI = (basicCurrency: string, currencies: string[]) => {

  var myHeaders = new Headers();
  myHeaders.append("apikey", "lzYTHifQ3bqSnytCPtRWWc5pzWeubwvoXMUd2FqT");

  var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  // fetch(`https://api.currencyapi.com/v3/latest?apikey=lzYTHifQ3bqSnytCPtRWWc5pzWeubwvoXMUd2FqT&currencies=${currencies.join('%2C')}&base_currency=${basicCurrency}`, requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  const response = {
    "meta": { "last_updated_at": "2023-01-05T23:59:59Z" },
    "data": {
      "BYN": {
        "code": "BYN",
        "value": 2.525344
      },
      "EUR": {
        "code": "EUR",
        "value": 0.950401
      },
      "PLN": {
        "code": "PLN",
        "value": 4.449341
      },
      "RUB": {
        "code": "RUB",
        "value": 72.150104
      },
      "UAH": {
        "code": "UAH",
        "value": 36.772788
      }
    }
  }

  const rates = { [basicCurrency]: { code: basicCurrency, value: 1 }, ...response.data}
  
  return rates
}