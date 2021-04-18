import { IPiePart } from './../../utils/types/homeTypes';

export type Categories = {
  id: number;
  name: string;
  icons: string;
  color: string;
  expenses: [
    {
      id: number;
      title: string;
      description: string;
      location: string;
      total: number;
      status: string;
    }
  ];
};

export interface IHomeState {
  categories: Categories[];
  selected: IPiePart | null;
  currency: string;
  addModal: boolean;
  name: string;
  icons: string | number;
  colors: string;
  isPurchaseModal: boolean;
  categoryId: number | null;
  categoryName: string;
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
  ADD_PURCHASE_MODAL = 'ADD_PURCHASE_MODAL',
  GET_CATEGORY_ID = 'GET_CATEGORY_ID',
  GET_CATEGORY_NAME = 'GET_CATEGORY_NAME',
  INCREMENT_AMOUNT = 'INCREMENT_AMOUNT',
  DECREMENT_AMOUNT = 'DECREMENT_AMOUNT',
}

interface DecrementAmount {
  type: HomeActionTypes.DECREMENT_AMOUNT;
  payload: any[];
}

interface IncrementAmount {
  type: HomeActionTypes.INCREMENT_AMOUNT;
  payload: Categories;
}

interface getCategoryName {
  type: HomeActionTypes.GET_CATEGORY_NAME;
  payload: string;
}
interface AddPurchase {
  type: HomeActionTypes.ADD_PURCHASE_MODAL;
  payload: boolean;
}

interface getCategoryId {
  type: HomeActionTypes.GET_CATEGORY_ID;
  payload: number;
}

interface CreateNewCategory {
  type: HomeActionTypes.CREATE_NEW_CATEGORY;
  payload: Categories;
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
  | AddPurchase
  | getCategoryId
  | getCategoryName
  | IncrementAmount
  | DecrementAmount
  | CreateNewCategory;
