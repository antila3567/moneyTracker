import { Categories } from './../types/homeTypes';
import { IDateAmountActionTypes } from './../types/dateAmountTypes';
export const filterDateAmount = (data: Categories[]) => {
  return {
    type: IDateAmountActionTypes.FILTER_AMOUNT,
    payload: data,
  };
};
