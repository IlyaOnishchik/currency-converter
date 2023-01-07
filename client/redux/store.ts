import { configureStore } from '@reduxjs/toolkit'
import { converterApi } from './api/converterApi'
import { converterReducer } from './slices/converterSlice'

export const store = configureStore({
  reducer: {
    [converterApi.reducerPath]: converterApi.reducer,
    converter: converterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(converterApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch