import {
  IDateAmountActionTypes,
  IDateAmountState,
  IDateActions,
} from './../types/dateAmountTypes';

const init: IDateAmountState = {
  categories: [],
};

const dateAmountReducer = (
  state = init,
  action: IDateActions
): IDateAmountState => {
  switch (action.type) {
    case IDateAmountActionTypes.FILTER_AMOUNT:
      return { ...state, categories: action.payload };
    default:
      const isAllActions: never = action;
  }
  return state;
};

export default dateAmountReducer;
