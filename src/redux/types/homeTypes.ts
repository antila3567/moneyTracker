import { IPiePart } from './../../utils/types/homeTypes';

export interface IHomeState {
  categories: any[];
  selected: IPiePart | null;
  currency: string;
  addModal: boolean;
  name: string;
  icons: string | number;
  colors: string;
}

export enum HomeActionTypes {
  PUSH_DATA = 'PUSH_DATA',
  CURRENT_ITEM = 'CURRENT_ITEM',
  GET_USER_CURRENCY = 'GET_USER_CURRENCY',
  ADD_MODAL = 'ADD_MODAL',
  NEW_CATEGORY_NAME = 'NEW_CATEGORY_NAME',
  NEW_CATEGORY_COLORS = 'NEW_CATEGORY_COLORS',
  NEW_CATEGORY_ICONS = 'NEW_CATEGORY_ICONS',
  CREATE_NEW_CATEGORY = 'CREATE_NEW_CATEGORY',
  REMOVE_CATEGORY = 'REMOVE_CATEGORY',
}

interface CreateNewCategory {
  type: HomeActionTypes.CREATE_NEW_CATEGORY;
  payload: {
    color: string;
    expenses: [{ id: number; total: number }];
    icons: number;
    id: number;
    name: string;
  };
}
interface RemoveCategory {
  type: HomeActionTypes.REMOVE_CATEGORY;
  payload: number;
}

interface NewCategoryColors {
  type: HomeActionTypes.NEW_CATEGORY_COLORS;
  payload: string;
}

interface NewCategoryIcons {
  type: HomeActionTypes.NEW_CATEGORY_ICONS;
  payload: string | number;
}

interface NewCategoryName {
  type: HomeActionTypes.NEW_CATEGORY_NAME;
  payload: string;
}

interface PushData {
  type: HomeActionTypes.PUSH_DATA;
  payload: any[];
}

interface PushCurrentItem {
  type: HomeActionTypes.CURRENT_ITEM;
  payload: object | any;
}

interface PushUserCurrency {
  type: HomeActionTypes.GET_USER_CURRENCY;
  payload: string;
}

interface AddModal {
  type: HomeActionTypes.ADD_MODAL;
  payload: boolean;
}

export type IHomeActions =
  | PushData
  | PushCurrentItem
  | PushUserCurrency
  | AddModal
  | NewCategoryColors
  | NewCategoryIcons
  | NewCategoryName
  | RemoveCategory
  | CreateNewCategory;
