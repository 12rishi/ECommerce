import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../pages/auth/types";
import { Status } from "../globals/types/globalType";
import { AppDispatch } from "./store";
import { APIforAuthenticate } from "../http/axiosInstance";
const initialState: CartState = {
  items: [],
  status: Status.Loading,
};
interface DeleteAction {
  productId: string;
}
interface UpdateAction extends DeleteAction {
  quantity: number;
}
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
    setDeleteItem(state: CartState, action: PayloadAction<DeleteAction>) {
      const index = state.items.findIndex(
        (item) => item.Product.id === action.payload.productId
      );
      state.items.splice(index, 1);
    },
    setUpdateItem(state: CartState, action: PayloadAction<UpdateAction>) {
      const index = state.items.findIndex(
        (item) => item.Product.id === action.payload.productId
      );
      if (index !== -1) {
        state.items[index].quantity = action.payload.quantity;
      }
    },
  },
});
export const { setItems, setStatus, setDeleteItem, setUpdateItem } =
  cartSlice.actions;
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
export function fetchCart() {
  return async function addToCartThunk(dispatch: AppDispatch) {
    try {
      const response = await APIforAuthenticate.get("customer/cart");
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
export function deleteCartItem(productId: string) {
  return async function deleteCartItemThunk(dispatch: AppDispatch) {
    try {
      const response = await APIforAuthenticate.delete(
        "customer/cart/" + productId
      );
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setDeleteItem({ productId }));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
export function updateCartItem(productId: string, quantity: number) {
  return async function updateCartItemThunk(dispatch: AppDispatch) {
    try {
      const response = await APIforAuthenticate.patch(
        "customer/cart/" + productId,
        {
          quantity,
        }
      );
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setUpdateItem({ productId, quantity }));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
