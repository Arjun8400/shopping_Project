import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  TotalPrice:0,
  TotalQuantity:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart:(state,actions)=>{
    const find =   state.cart.findIndex((value)=>{
       return value._id === actions.payload._id
      })

     
      if(find != -1){
        state.cart[find] = {...state.cart[find],qunatity:state.cart[find].qunatity+1} 

      }else{
        state.cart.push({...actions.payload,qunatity:1})
      }
   },
   deleteCartItem:(state,actions)=>{
      state.cart = state.cart.filter((value)=>{
        return  value._id !== actions.payload._id
      })
   },
   IncrementQuantity:(state,actions)=>{
          state.cart = state.cart.map((value)=>{
            if(value._id === actions.payload._id){
                return {...value, qunatity:value.qunatity+1}
            }
            return value
          })
   },
   DecrementQuantity:(state,actions)=>{
    state.cart = state.cart.map((value)=>{
      if(value._id===actions.payload._id){
        return { ...value , qunatity:value.qunatity > 1 ? value.qunatity-1 :1}

      }
      return value
    })
   },
   cartTotal:(state)=>{
      const {totalPrice,totalQuantity} =  state.cart.reduce((cartTotal,cartItems)=>{
          const {productPrice , qunatity} = cartItems
          const itemTotal = parseFloat(productPrice) * qunatity
          cartTotal.totalPrice += itemTotal
          cartTotal.totalQuantity += qunatity
          return cartTotal
        },{
          totalPrice:0,
          totalQuantity:0
        })

        state.TotalPrice = totalPrice
        state.TotalQuantity = totalQuantity
   }

  },
})


export const { addToCart , deleteCartItem , IncrementQuantity , DecrementQuantity , cartTotal } = cartSlice.actions

export default cartSlice.reducer