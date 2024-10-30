import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import API from "../http/axiosInstance";

interface registerData {
  username: string;
  email: string;
  password: string;
}
interface loginData {
  email: string;
  password: string;
}
interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}
enum Status {
  Success = "success",
  Error = "error",
  Loading = "loading",
}
interface InitialState {
  user: User;
  status: string;
}
const initialState: InitialState = {
  user: {} as User,
  status: "" as Status,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state: InitialState, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setStatus(state: InitialState, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});
export const { setUser, setStatus } = authSlice.actions;
export default authSlice.reducer;
export function register(data: registerData) {
  return async function registerThunk(dispatch: any) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await API.post("register", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
export function login(data: loginData) {
  return async function loginThunk(dispatch: any) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await API.post("login", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
