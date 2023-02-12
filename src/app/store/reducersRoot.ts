import { combineReducers } from '@reduxjs/toolkit';
import userList from './slices/user';
import authentication from './slices/auth';

const reducers = {
  userList,
  authentication
}

const reducersRoot = combineReducers({
  ...reducers
})

export type AppState = ReturnType<typeof reducersRoot>

export default reducersRoot