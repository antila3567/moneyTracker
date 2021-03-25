import {
  IHomeState,
  IHomeActions,
  HomeActionTypes,
} from './../types/homeTypes';

const init: IHomeState = {
  categories: [],
  selected: null,
  currency: 'UAH',
  addModal: true,
};

const homeReducer = (state = init, action: IHomeActions): IHomeState => {
  switch (action.type) {
    case HomeActionTypes.PUSH_DATA:
      return { ...state, categories: action.payload };
    case HomeActionTypes.CURRENT_ITEM:
      return { ...state, selected: action.payload };
    case HomeActionTypes.GET_USER_CURRENCY:
      return { ...state, currency: action.payload };
    case HomeActionTypes.ADD_MODAL:
      return { ...state, addModal: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
