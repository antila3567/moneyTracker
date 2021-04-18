import {
  IWalletState,
  WalletActions,
  WalletActionsTypes,
} from './../types/walletTypes';

const init: IWalletState = {
  goals: [
    { name: 'daily budget', total: 0, percent: 0, id: 1 },
    { name: 'weakly budget', total: 0, percent: 0, id: 2 },
    { name: 'month budget', total: 0, percent: 0, id: 3 },
    { name: 'year budget', total: 0, percent: 0, id: 4 },
  ],
  balance: 0,
  icon: null,
  id: null,
};

const walletReducer = (state = init, action: WalletActions): IWalletState => {
  switch (action.type) {
    case WalletActionsTypes.GET_GOAL_ID:
      return { ...state, id: action.payload };
    case WalletActionsTypes.CHANGE_GOAL:
      const filterGoals = state.goals.filter((item) => item.id !== state.id);
      const newGoals = [...filterGoals, action.payload];
      const sortGoal = newGoals.sort((a, b) => (a.id < b.id ? -1 : 1));
      return { ...state, goals: sortGoal };
    case WalletActionsTypes.CHANGE_BALANCE:
      return { ...state, balance: action.payload };
    default:
      const isAllActions: never = action;
  }
  return state;
};

export default walletReducer;
