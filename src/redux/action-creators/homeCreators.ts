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

export const newCategoryName = (name: string) => {
  return {
    type: HomeActionTypes.NEW_CATEGORY_NAME,
    payload: name,
  };
};

export const newCategoryIcons = (icons: string | number) => {
  return {
    type: HomeActionTypes.NEW_CATEGORY_ICONS,
    payload: icons,
  };
};

export const newCategoryColors = (colors: string) => {
  return {
    type: HomeActionTypes.NEW_CATEGORY_COLORS,
    payload: colors,
  };
};

export const createNewCategory = (data: object) => {
  return {
    type: HomeActionTypes.CREATE_NEW_CATEGORY,
    payload: data,
  };
};

export const removeCategory = (id: number) => {
  return {
    type: HomeActionTypes.REMOVE_CATEGORY,
    payload: id,
  };
};

export const addPurchaseModal = (bool: boolean) => {
  return {
    type: HomeActionTypes.ADD_PURCHASE_MODAL,
    payload: bool,
  };
};

export const getCategoryId = (id: number) => {
  return {
    type: HomeActionTypes.GET_CATEGORY_ID,
    payload: id,
  };
};

export const getCategoryName = (name: string) => {
  return {
    type: HomeActionTypes.GET_CATEGORY_NAME,
    payload: name,
  };
};
