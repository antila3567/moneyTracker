import { IPiePart } from './../../utils/types/homeTypes';
import { HomeActionTypes } from '../types/homeTypes';

export const pushHomeCategories = (data: any[]) => {
  return {
    type: HomeActionTypes.PUSH_DATA,
    payload: data,
  };
};

export const pushCurrentItem = (data: IPiePart | any) => {
  return {
    type: HomeActionTypes.CURRENT_ITEM,
    payload: data,
  };
};

export const getUserCurrency = (currency: string) => {
  return {
    type: HomeActionTypes.GET_USER_CURRENCY,
    payload: currency,
  };
};

export const openAddModal = (bool: boolean) => {
  return {
    type: HomeActionTypes.ADD_MODAL,
    payload: bool,
  };
};
