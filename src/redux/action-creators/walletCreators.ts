import { WalletActionsTypes, IWalletData } from './../types/walletTypes';
export const changeGoal = (goal: IWalletData) => {
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
