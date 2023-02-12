import { configureStore } from '@reduxjs/toolkit';
import reducersRoot from './reducersRoot';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducersRoot)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
export default store