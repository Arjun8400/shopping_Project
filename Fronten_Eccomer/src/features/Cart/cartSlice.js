import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const saveCart = createAsyncThunk("cart/save", async (cartData) => {
  const token = localStorage.getItem("token");

  const respose = await fetch(`/api/cart/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cartData),
  });
  return await respose.json();
});

export const fetchCart = createAsyncThunk("cart/fetch", async (userId) => {
  let token = localStorage.getItem("token");
  const response = await fetch(`/api/cart/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
});

const initialState = {
  cart: [],
  TotalPrice: 0,
  TotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const find = state.cart.findIndex((value) => {
        return value._id === actions.payload._id;
      });

      if (find != -1) {
        state.cart[find] = {
          ...state.cart[find],
          qunatity: state.cart[find].qunatity + 1,
        };
      } else {
        state.cart.push({ ...actions.payload, qunatity: 1 });
      }
    },
    deleteCartItem: (state, actions) => {
      state.cart = state.cart.filter((value) => {
        return value._id !== actions.payload._id;
      });
    },
    IncrementQuantity: (state, actions) => {
      state.cart = state.cart.map((value) => {
        if (value._id === actions.payload._id) {
          return { ...value, qunatity: value.qunatity + 1 };
        }
        return value;
      });
    },
    DecrementQuantity: (state, actions) => {
      state.cart = state.cart.map((value) => {
        if (value._id === actions.payload._id) {
          return {
            ...value,
            qunatity: value.qunatity > 1 ? value.qunatity - 1 : 1,
          };
        }
        return value;
      });
    },
    cartTotal: (state) => {
      const { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItems) => {
          const { productPrice, qunatity } = cartItems;
          const itemTotal = parseFloat(productPrice) * qunatity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += qunatity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );

      state.TotalPrice = totalPrice;
      state.TotalQuantity = totalQuantity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveCart.fulfilled, (state, actions) => {
      //! console.log("Cart save : - ", actions.payload);
    });
    builder.addCase(fetchCart.fulfilled, (state, actions) => {
      state.cart = actions.payload.cartitems || [];
      state.TotalPrice = actions.payload.totalPrice || 0;
      state.TotalQuantity = actions.payload.totalQuantity || 0;
    });
  },
});

export const {
  addToCart,
  deleteCartItem,
  IncrementQuantity,
  DecrementQuantity,
  cartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
