import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState, ManageMessage } from "../../utils/types/user";

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
    },
    addMessage: (state, action: PayloadAction<ManageMessage>) =>{
      const loggedUserIndex = state.users.findIndex(element => element.id === action.payload.loggedUser.id)
      state.users[loggedUserIndex].messages.push(action.payload.message)
    }
  }
})

export const { addUser, addMessage } = userSlice.actions

export default userSlice.reducer