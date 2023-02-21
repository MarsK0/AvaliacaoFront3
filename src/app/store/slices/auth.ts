import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoggedUser } from "../../utils/types/auth";

const initialState = {
  isLoggedIn: false,
  user: null
} as LoggedUser;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  }
})

export const {} = authSlice.actions

export default authSlice.reducer
