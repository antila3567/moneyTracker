export interface IWalletData {
  percent?: number;
  name: string;
  total: number;
  id: number;
}

export interface IWalletState {
  goals: IWalletData[];
  balance: number;
  icon: number | null;
  id: number | null;
}
export enum WalletActionsTypes {
  CHANGE_GOAL = 'CHANGE_GOAL',
  CHANGE_BALANCE = 'CHANGE_BALANCE',
  GET_GOAL_ID = 'GET_GOAL_ID',
}

interface ChangeGoalAction {
  type: WalletActionsTypes.CHANGE_GOAL;
  payload: IWalletData;
}
interface ChangeBalanceAction {
  type: WalletActionsTypes.CHANGE_BALANCE;
  payload: number;
}
interface GetGoalId {
  type: WalletActionsTypes.GET_GOAL_ID;
  payload: number;
}

export type WalletActions = ChangeGoalAction | ChangeBalanceAction | GetGoalId;
