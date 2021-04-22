export interface IWalletData {
  percent: number;
  name: string;
  total: number;
  id: number;
  amount: number;
}

export interface IOverLimit {
  id: number;
  name: string;
}

export type Date = {
  day: number;
  weak: number;
  month: number;
  year: number;
};

export interface IWalletState {
  goals: IWalletData[];
  balance: number;
  icon: string;
  id: number | null;
  overLimit: IOverLimit[];
  date: Date | null;
}
export enum WalletActionsTypes {
  CHANGE_GOAL = 'CHANGE_GOAL',
  CHANGE_BALANCE = 'CHANGE_BALANCE',
  GET_GOAL_ID = 'GET_GOAL_ID',
  NEW_PURCHASE = 'NEW_PURCHASE',
  SHOW_ALERT = 'SHOW_ALERT',
  GET_DATE = 'GET_DATE',
  UPDATE_AMOUNT = 'UPDATE_AMOUNT',
}

interface ChangeGoalAction {
  type: WalletActionsTypes.CHANGE_GOAL;
  payload: number;
}
interface ChangeBalanceAction {
  type: WalletActionsTypes.CHANGE_BALANCE;
  payload: number;
}
interface GetGoalId {
  type: WalletActionsTypes.GET_GOAL_ID;
  payload: number;
}
interface NewPurchase {
  type: WalletActionsTypes.NEW_PURCHASE;
  payload: number;
}
interface ShowAlert {
  type: WalletActionsTypes.SHOW_ALERT;
  payload: IOverLimit;
}
interface GetDate {
  type: WalletActionsTypes.GET_DATE;
  payload: Date;
}
interface UpdateAmount {
  type: WalletActionsTypes.UPDATE_AMOUNT;
  payload: number;
}

export type WalletActions =
  | ChangeGoalAction
  | ChangeBalanceAction
  | GetGoalId
  | NewPurchase
  | ShowAlert
  | GetDate
  | UpdateAmount;
