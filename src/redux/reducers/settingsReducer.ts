import {
  ISettingActions,
  ISettingState,
  SwitchActionTypes,
} from './../types/settingTypes';

const init: ISettingState = {
  secure: true,
  language: '',
  theme: true,
  isInit: true,
};

const settingReducer = (
  state = init,
  action: ISettingActions
): ISettingState => {
  switch (action.type) {
    case SwitchActionTypes.SWITCH_SECURE:
      return { ...state, secure: action.payload };
    case SwitchActionTypes.SWITCH_LANGUAGE:
      return { ...state, language: action.payload };
    case SwitchActionTypes.SWITCH_THEME:
      return { ...state, theme: action.payload };
    case SwitchActionTypes.IS_INIT:
      return { ...state, isInit: action.payload };
    default:
      const isAllActions: never = action;
  }
  return state;
};

export default settingReducer;
