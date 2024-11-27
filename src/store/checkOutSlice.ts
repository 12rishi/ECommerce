import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/globalType";
import {
  MyOrdersData,
  OrderData,
  OrderResponse,
  OrderResponseItem,
} from "../pages/auth/types";
import { AppDispatch } from "./store";
import { APIforAuthenticate } from "../http/axiosInstance";

const initialState: OrderResponse = {
  items: [],
  status: Status.Loading,
  khaltiUrl: null,
  myOrders: [],
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setItems(state: OrderResponse, action: PayloadAction<OrderResponseItem>) {
      state.items.push(action.payload);
    },
    setMyOrders(state: OrderResponse, action: PayloadAction<MyOrdersData[]>) {
      state.myOrders = action.payload;
    },
    setStatus(state: OrderResponse, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setKhaltiUrl(
      state: OrderResponse,
      action: PayloadAction<OrderResponse["khaltiUrl"]>
    ) {
      state.khaltiUrl = action.payload;
    },
  },
});
export const { setItems, setStatus, setKhaltiUrl, setMyOrders } =
  orderSlice.actions;
export default orderSlice.reducer;
export function orderItem(data: OrderData) {
  return async function orderItemThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await APIforAuthenticate.post("/order", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setItems(response.data.data));
        if (response.data.url) {
          dispatch(setKhaltiUrl(response.data.url));
        } else {
          dispatch(setKhaltiUrl(null));
        }
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
export function fetchMyOrder() {
  return async function orderItemThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await APIforAuthenticate.get("/order/customer");
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setMyOrders(response.data.data));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
