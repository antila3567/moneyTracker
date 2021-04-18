import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import switchThemeReducer from './switchThemeReducer';
import userReducer from './userReduce';
import walletReducer from './walletReduce';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'switchTheme', 'home', 'wallet'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  switchTheme: switchThemeReducer,
  users: userReducer,
  home: homeReducer,
  wallet: walletReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
