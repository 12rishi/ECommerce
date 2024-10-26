import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}
interface InitialState {
  user: User;
  status: string;
}
const initialState: InitialState = {
  user: {} as User,
  status: "loading",
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
