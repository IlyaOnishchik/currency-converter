import { configureStore } from '@reduxjs/toolkit'
import { converterApi } from './api/converterApi'
import { converterReducer } from './slices/converterSlice'
import { ratesReducer } from './slices/ratesSlice'

export const store = configureStore({
  reducer: {
    [converterApi.reducerPath]: converterApi.reducer,
    converter: converterReducer,
    rates: ratesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(converterApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch