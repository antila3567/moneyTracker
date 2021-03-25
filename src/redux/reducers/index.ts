import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import switchThemeReducer from './switchThemeReducer';
import userReducer from './userReduce';

export const rootReducer = combineReducers({
  auth: authReducer,
  switchTheme: switchThemeReducer,
  users: userReducer,
  home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
