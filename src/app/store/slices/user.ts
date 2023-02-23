import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../utils/types/user";

const initialState = {
  newUserId: 1,
  users: []
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      action.payload.id = state.newUserId
      state.newUserId += 1
      state.users.push(action.payload)
    }
  }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer