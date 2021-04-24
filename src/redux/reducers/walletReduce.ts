import {
  IWalletState,
  WalletActions,
  WalletActionsTypes,
} from './../types/walletTypes';

const init: IWalletState = {
  goals: [
    { name: 'daily', amount: 0, total: 0, percent: 0, id: 1 },
    { name: 'weakly', amount: 0, total: 0, percent: 0, id: 2 },
    { name: 'month', amount: 0, total: 0, percent: 0, id: 3 },
    { name: 'year', amount: 0, total: 0, percent: 0, id: 4 },
  ],
  overLimit: [],
  date: null,
  balance: 0,
  icon: '$',
  id: null,
};

const walletReducer = (state = init, action: WalletActions): IWalletState => {
  switch (action.type) {
    case WalletActionsTypes.GET_GOAL_ID:
      return { ...state, id: action.payload };
    case WalletActionsTypes.CHANGE_GOAL:
      const filterGoals = state.goals.filter((item) => item.id !== state.id);
      const filterGoal = state.goals.filter((item) => item.id === state.id);
      const updateGoal = filterGoal.map((item) => {
        item.total = action.payload;
        return item;
      });
      const sortGoals = [...filterGoals, ...updateGoal];
      const newGoals = sortGoals.sort((a, b) => (a.id < b.id ? -1 : 1));
      return { ...state, goals: newGoals };
    case WalletActionsTypes.CHANGE_BALANCE:
      return { ...state, balance: action.payload };
    case WalletActionsTypes.NEW_PURCHASE:
      const addPurchase = state.goals.map((item) => {
        if (item.total !== 0) {
          item.amount = item.amount + action.payload;
        }
        return item;
      });
      return { ...state, goals: addPurchase };
    case WalletActionsTypes.SHOW_ALERT:
      const isNew = !!state.overLimit.find(
        (item) => item.id === action.payload.id
      );
      const notify = [...state.overLimit, action.payload];
      const notification = notify.sort((a, b) => (a.id < b.id ? -1 : 1));
      if (!isNew) {
        return { ...state, overLimit: notification };
      } else {
        return state;
      }
    case WalletActionsTypes.GET_DATE:
      return { ...state, date: action.payload };
    case WalletActionsTypes.UPDATE_AMOUNT:
      const goalsCutId = state.goals.filter(
        (item) => item.id !== action.payload
      );

      const goalsCutAnotherId = state.goals.filter(
        (item) => item.id === action.payload
      );

      const updateAmount = goalsCutAnotherId.map((item) => {
        item.amount = 0;
        return item;
      });

      const concatGoals = [...goalsCutId, ...updateAmount];

      const updateAmountGoals = concatGoals.sort((a, b) =>
        a.id < b.id ? -1 : 1
      );
      return { ...state, goals: updateAmountGoals };
    default:
      const isAllActions: never = action;
  }
  return state;
};

export default walletReducer;
