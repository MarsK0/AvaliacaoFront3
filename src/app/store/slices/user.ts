import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState, ManageMessage, IdentifiedMessage, Message } from "../../utils/types/user";

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
    },
    editMessage: (state, action: PayloadAction<IdentifiedMessage>) => {
      const loggedUserIndex = state.users.findIndex(element => element.id === action.payload.loggedUser.id)
      const messageIndex = action.payload.index
      const editedMessage: Message = {
        time: action.payload.time,
        title: action.payload.title,
        description: action.payload.description,
      }
      console.log(editedMessage)
      state.users[loggedUserIndex].messages[messageIndex] = editedMessage

    },
    deleteMessage: (state, action: PayloadAction<IdentifiedMessage>)=>{
      const loggedUserIndex = state.users.findIndex(element => element.id === action.payload.loggedUser.id)
      const newMessageList = state.users[loggedUserIndex].messages.filter((message,index) => index != action.payload.index)

      state.users[loggedUserIndex].messages = newMessageList
    }
  }
})

export const { addUser, addMessage, editMessage, deleteMessage } = userSlice.actions

export default userSlice.reducer