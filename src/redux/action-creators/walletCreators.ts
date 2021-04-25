import {
  WalletActionsTypes,
  IWalletData,
  IOverLimit,
  Date,
} from './../types/walletTypes';
export const changeGoal = (goal: number) => {
  return {
    type: WalletActionsTypes.CHANGE_GOAL,
    payload: goal,
  };
};

export const getGoalId = (id: number) => {
  return {
    type: WalletActionsTypes.GET_GOAL_ID,
    payload: id,
  };
};

export const changeBalance = (sum: number) => {
  return {
    type: WalletActionsTypes.CHANGE_BALANCE,
    payload: sum,
  };
};

export const addNewPurchase = (sum: number) => {
  return {
    type: WalletActionsTypes.NEW_PURCHASE,
    payload: sum,
  };
};

export const showAlert = (info: IOverLimit) => {
  return {
    type: WalletActionsTypes.SHOW_ALERT,
    payload: info,
  };
};

export const getDateWallet = (date: Date) => {
  return {
    type: WalletActionsTypes.GET_DATE,
    payload: date,
  };
};

export const newDayAmount = (id: number) => {
  return {
    type: WalletActionsTypes.UPDATE_AMOUNT,
    payload: id,
  };
};

export const changeSymbol = (sym: string) => {
  return {
    type: WalletActionsTypes.CHANGE_SYMBOL,
    payload: sym,
  };
};
