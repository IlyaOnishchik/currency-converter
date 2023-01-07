import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConverterState {
  amount: number
  from: string
  to: string
}

const initialState: ConverterState = {
  amount: 10,
  from: 'USD',
  to: 'BYN'
}

export const converterSlice = createSlice({
  name: 'converterSlice',
  initialState,
  reducers: {
    changeAmount: (state, action: PayloadAction<number>) => { state.amount = action.payload },
    changeFrom: (state, action: PayloadAction<string>) => { state.from = action.payload },
    changeTo: (state, action: PayloadAction<string>) => { state.to = action.payload }
  }
})

export const { changeAmount, changeFrom, changeTo } = converterSlice.actions
export const converterReducer = converterSlice.reducer