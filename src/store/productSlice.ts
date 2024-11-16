import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState, ProductType } from "../pages/auth/types";
import { Status } from "../globals/types/globalType";
import { AppDispatch, RootState } from "./store";
import { API } from "../http/axiosInstance";
const initialState: ProductState = {
  product: [],
  status: Status.Loading,
  singleProductData: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state: ProductState, action: PayloadAction<ProductType[]>) {
      state.product = action.payload;
    },
    setStatus(state: ProductState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setSingleProductdata(
      state: ProductState,
      action: PayloadAction<ProductType>
    ) {
      state.singleProductData = action.payload;
    },
  },
});
export const { setProduct, setStatus, setSingleProductdata } =
  productSlice.actions;
export default productSlice.reducer;
export function fetchProduct() {
  return async function fetchProductThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await API.get("admin/product");
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
        const { data } = response.data;
        dispatch(setProduct(data));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
export function fetchSingleProduct(productId: string) {
  return async function fetchSingleProductThunk(
    dispatch: AppDispatch,
    getState: () => RootState
  ) {
    const state = getState();
    const existingData = state.product.product.find(
      (product: ProductType) => product.id === productId
    );
    if (existingData) {
      dispatch(setSingleProductdata(existingData));
    } else {
      dispatch(setStatus(Status.Loading));
      try {
        const response = await API.get(`admin/product/${productId}`);
        if (response.status === 200) {
          dispatch(setStatus(Status.Success));
          const { data } = response.data;
          dispatch(setSingleProductdata(data));
        } else {
          dispatch(setStatus(Status.Error));
        }
      } catch (error) {
        dispatch(setStatus(Status.Error));
      }
    }
  };
}
