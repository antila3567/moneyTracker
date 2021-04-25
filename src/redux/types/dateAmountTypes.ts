import { Categories } from './homeTypes';

export interface IDateAmountState {
  categories: Categories[];
}

export enum IDateAmountActionTypes {
  FILTER_AMOUNT = 'FILTER_AMOUNT',
}

interface FilterAmount {
  type: IDateAmountActionTypes.FILTER_AMOUNT;
  payload: Categories[];
}

export type IDateActions = FilterAmount;
