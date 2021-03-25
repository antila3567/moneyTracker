import { IPiePart } from './../../utils/types/homeTypes';
export interface IHomeState {
  categories: any[];
  selected: IPiePart | null;
  currency: string;
  addModal: boolean;
}

export enum HomeActionTypes {
  PUSH_DATA = 'PUSH_DATA',
  CURRENT_ITEM = 'CURRENT_ITEM',
  GET_USER_CURRENCY = 'GET_USER_CURRENCY',
  ADD_MODAL = 'ADD_MODAL',
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
  | AddModal;
