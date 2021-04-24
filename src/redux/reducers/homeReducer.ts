import {
  IHomeState,
  IHomeActions,
  HomeActionTypes,
} from './../types/homeTypes';

const init: IHomeState = {
  categories: [],
  selected: null,
  currency: 'UAH',
  name: '',
  icons: 16,
  colors: '#00BFFF',
  categoryId: null,
  categoryName: '',
  addModal: false,
  isPurchaseModal: false,
  id: null,
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
    case HomeActionTypes.NEW_CATEGORY_NAME:
      return { ...state, name: action.payload };
    case HomeActionTypes.NEW_CATEGORY_ICONS:
      return { ...state, icons: action.payload };
    case HomeActionTypes.NEW_CATEGORY_COLORS:
      return { ...state, colors: action.payload };
    case HomeActionTypes.CREATE_NEW_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        name: '',
        icons: 16,
        colors: '#00BFFF',
      };
    case HomeActionTypes.REMOVE_CATEGORY:
      const newData = state.categories.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, categories: newData };
    case HomeActionTypes.ADD_PURCHASE_MODAL:
      return { ...state, isPurchaseModal: action.payload };
    case HomeActionTypes.GET_CATEGORY_ID:
      return { ...state, categoryId: action.payload };
    case HomeActionTypes.GET_CATEGORY_NAME:
      return { ...state, categoryName: action.payload };
    case HomeActionTypes.INCREMENT_AMOUNT:
      const filterCategory = state.categories.filter(
        (item) => item.id !== state.categoryId
      );
      const sortAmount = [...filterCategory, action.payload];
      const newGoals = sortAmount.sort((a, b) => (a.id < b.id ? -1 : 1));
      return {
        ...state,
        categories: newGoals,
      };
    case HomeActionTypes.GET_AMOUNT_ID: {
      return { ...state, id: action.payload };
    }
    case HomeActionTypes.DECREMENT_AMOUNT:
      const cutCategories = state.categories.filter(
        (item) => item.id === state.id
      );
      const cutCategoriesId = state.categories.filter(
        (item) => item.id !== state.id
      );
      const mapCategories = cutCategories.map((item) => {
        const expenses: any = item.expenses.filter(
          (fil) => fil.id !== action.payload
        );
        item.expenses = expenses;
        return item;
      });
      const sortCategories = [...cutCategoriesId, ...mapCategories];
      const updateCat = sortCategories.sort((a, b) => (a.id < b.id ? -1 : 1));

      return { ...state, categories: updateCat };
    default:
      const isAllActions: never = action;
  }
  return state;
};

export default homeReducer;
