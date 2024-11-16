import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../pages/auth/types";
import { Status } from "../globals/types/globalType";
import { AppDispatch } from "./store";
import { APIforAuthenticate } from "../http/axiosInstance";
const initialState: CartState = {
  items: [],
  status: Status.Loading,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems(state: CartState, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    setStatus(state: CartState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});
export const { setItems, setStatus } = cartSlice.actions;
export default cartSlice.reducer;
export function addToCart(productId: string) {
  return async function addToCartThunk(dispatch: AppDispatch) {
    try {
      const response = await APIforAuthenticate.post("customer/cart", {
        productId,
        quantity: 1,
      });
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setItems(response.data.data));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
