import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id?: number,
  avatar?: string,
  username: string,
  password: string,
  recados: string[]
}

interface State {
  newUserId: number,
  users: Array<User>
}

const initialState = {
  newUserId: 1,
  users: []
} as State

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
})

export const {} = userSlice.actions

export default userSlice.reducer