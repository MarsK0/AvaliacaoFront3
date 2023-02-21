export interface Message{
  time: string;
  title: string;
  description: string;
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