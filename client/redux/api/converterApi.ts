import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type LiveResponseQuote = {
  [key: string]: number
}
type LiveResponse = {
  quotes: LiveResponseQuote
  source: string
  success: boolean
  timestamp: number
}

type ConvertResponseInfo = {
  quote: number
  timestamp: number
}
type ConvertResponseQuery = {
  amount: number
  from: string
  to: string
}
type ConvertResponse = {
  info: ConvertResponseInfo
  query: ConvertResponseQuery,
  result: number
  success: boolean
}

const apilayerBaseUrl = 'https://api.apilayer.com/currency_data/'
const apilayerKey = 'yW8j7Pxh5d5Bn77JRgHeQGGLywpBQMtA'

export const converterApi = createApi({
  reducerPath: 'converterApi',
  baseQuery: fetchBaseQuery({ baseUrl: apilayerBaseUrl, headers: { 'apikey': apilayerKey } }),
  endpoints: (builder) => ({
    live: builder.query<LiveResponse, { basicCurrencyCode: string, currenciesCodes: string[] }> ({
      query: (arg) => {
        const { basicCurrencyCode, currenciesCodes } = arg
        return `live?source=${basicCurrencyCode}&currencies=${currenciesCodes.join('%2C')}`
      }
    }),
    convert: builder.query<ConvertResponse, { from: string, to: string, amount: number }> ({
      query: (arg) => {
        const { from, to, amount } = arg
        return `convert?to=${to}&from=${from}&amount=${amount}`
      }
    })
  })
})

export const { useLiveQuery, useConvertQuery } = converterApi