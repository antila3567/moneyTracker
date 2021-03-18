import { combineReducers } from 'redux';
import authReducer from './authReducer';
import switchThemeReducer from './switchThemeReducer';
import userReducer from './userReduce';

export const rootReducer = combineReducers({
  auth: authReducer,
  switchTheme: switchThemeReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
