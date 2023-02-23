import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, LoggedUser } from "../../utils/types/auth";

const initialState = {
  isLoggedIn: false,
  user: null
} as LoggedUser;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
