import { Auth } from "./auth";

export interface Message{
  time: string,
  title: string,
  description: string,
}

export interface IdentifiedMessage extends Message{
  loggedUser: Auth,
  index: number
}

export interface ManageMessage{
  loggedUser: Auth,
  message: Message
}

export interface User {
  id?: number,
  username: string,
  password: string,
  messages: Array<Message>
}

export interface UserState {
  newUserId: number,
  users: Array<User>
}