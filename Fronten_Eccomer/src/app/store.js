import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/Cart/cartSlice'

export const store = configureStore({
  reducer: {
    Cart: productReducer
  },
})