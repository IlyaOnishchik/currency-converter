import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Currency } from "../../types/Currency"

interface RatesState {
  basicCurrency: Currency
  defaultBasicCurrency: Currency
  defaultCurrencies: Currency[]
}

const initialState: RatesState = {
  basicCurrency: {
    "id": "74289042-2cc2-4433-bd86-5539d88a0453",
    "code": "USD",
    "name": "United States dollar",
    "symbol": "$",
    "imageName": "f5d4a976-84a6-4bd1-95e3-7b9da357c97a.svg"
  },
  defaultBasicCurrency: {
    "id": "74289042-2cc2-4433-bd86-5539d88a0453",
    "code": "USD",
    "name": "United States dollar",
    "symbol": "$",
    "imageName": "f5d4a976-84a6-4bd1-95e3-7b9da357c97a.svg"
  },
  defaultCurrencies: [
    {
    "id": "1505a0b2-937e-4f7a-9b35-add06d5827cc",
    "code": "EUR",
    "name": "Euro",
    "symbol": "€",
    "imageName": "ae085381-9402-413d-9937-25d9debd4aeb.svg"
    },
    {
      "id": "e6980792-51af-4964-93b9-d54c8c072912",
      "code": "BYN",
      "name": "Belarusian ruble",
      "symbol": "Br",
      "imageName": "3130ad2f-a097-4ff7-b9e8-d0e32789713c.svg"
    },
    {
      "id": "18e7eaaf-bd5f-4d5c-bb32-f55aba781b63",
      "code": "RUB",
      "name": "Russian ruble",
      "symbol": "₽",
      "imageName": "b1ecaffd-68c6-4a39-9162-4fa6e244087e.svg"
    },
    {
      "id": "1d462d1e-acb9-42df-bb45-595c5ce442b8",
      "code": "PLN",
      "name": "Polish zloty",
      "symbol": "zł",
      "imageName": "4757b807-81f6-45bf-b852-f4cd59f06f6d.svg"
    },
    {
      "id": "eac5e842-b63a-4473-bada-4b20029429ee",
      "code": "UAH",
      "name": "Ukrainian hryvnia",
      "symbol": "₴",
      "imageName": "3bce6df2-c34f-447c-a999-8672b43d1957.svg"
    }
  ]
}

export const ratesSlice = createSlice({
  name: 'ratesSlice',
  initialState,
  reducers: {
    changeBasicCurrency: (state, action: PayloadAction<Currency>) => {
      state.basicCurrency = action.payload 
    }
  }
})

export const { changeBasicCurrency } = ratesSlice.actions
export const ratesReducer = ratesSlice.reducer