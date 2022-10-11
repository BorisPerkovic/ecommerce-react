import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartModel } from "../shared/models";

export interface InitialState {
  cartItems: CartModel[];
  cartTotalQuantity: number;
  cartTotalAmmount: number;
}

const initialState: InitialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<CartModel>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, { payload }: PayloadAction<number>) {
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== payload
      );
      state.cartItems = nextCartItems;
    },
    decreaseCart(state, { payload }: PayloadAction<number>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== payload
        );
        state.cartItems = nextCartItems;
      }
    },
    increaseCart(state, { payload }: PayloadAction<number>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload
      );
      state.cartItems[itemIndex].cartQuantity += 1;
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmmount = total;
      state.cartTotalQuantity = quantity;
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
