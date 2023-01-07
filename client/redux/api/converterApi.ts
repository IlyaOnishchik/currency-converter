import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Currency } from '../../types/Currency'

const apilayerBaseUrl = 'https://api.apilayer.com/currency_data/'
const apilayerKey = 'yW8j7Pxh5d5Bn77JRgHeQGGLywpBQMtA'

// const appcurrencyapiBaseUrl = 'https://api.currencyapi.com/v3/'
// const appcurrencyapiKey = 'lzYTHifQ3bqSnytCPtRWWc5pzWeubwvoXMUd2FqT'
// latest - http://api.currencyapi.com/v3/latest?apikey=lzYTHifQ3bqSnytCPtRWWc5pzWeubwvoXMUd2FqT&currencies=EUR%2CUSD%2CCAD&base_currency=BYN


export const converterApi = createApi({
  reducerPath: 'converterApi',
  baseQuery: fetchBaseQuery({ baseUrl: apilayerBaseUrl, headers: { 'apikey': apilayerKey } }),
  endpoints: (builder) => ({
    live: builder.query<any, { basicCurrencyCode: string, currenciesCodes: string[] }> ({
      query: (arg) => {
        const { basicCurrencyCode, currenciesCodes } = arg
        return `live?source=${basicCurrencyCode}&currencies=${currenciesCodes.join('%2C')}`
      }
    }),
    convert: builder.query<any, { from: string, to: string, amount: number }> ({
      query: (arg) => {
        const { from, to, amount } = arg
        return `convert?to=${to}&from=${from}&amount=${amount}`
      }
    })
  })
})

export const { useLiveQuery, useConvertQuery } = converterApi