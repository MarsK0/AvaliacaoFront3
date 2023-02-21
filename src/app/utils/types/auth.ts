import { User } from "./user"

export interface Auth extends Omit<User, 'password'>{

}

export interface LoggedUser{
  isLoggedIn: boolean,
  user: Auth | null
}