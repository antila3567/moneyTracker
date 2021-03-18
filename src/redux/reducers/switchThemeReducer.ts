import {
  IThemeActions,
  IInitState,
  switchActionTypes,
} from './../types/switchTheme';

const init: IInitState = {
  theme: true,
};

const switchThemeReducer = (state = init, action: IThemeActions) => {
  switch (action.type) {
    case switchActionTypes.SWITCH_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default switchThemeReducer;
