import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../utils/types/user";

const initialState = {
  newUserId: 1,
  users: []
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
})

export const {} = userSlice.actions

export default userSlice.reducer