import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import userReducer from './userReduce';
import walletReducer from './walletReduce';
import settingReducer from './settingsReducer';
import dateAmountReducer from './dateAmountReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'home', 'settings'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  home: homeReducer,
  wallet: walletReducer,
  settings: settingReducer,
  dateAmount: dateAmountReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
