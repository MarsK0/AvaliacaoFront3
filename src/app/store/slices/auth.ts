import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user";

export interface Auth extends Omit<User, 'password'>{

}

export interface LoggedUser{
  isLoggedIn: boolean,
  user: Auth | null
}

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
