import { SwitchActionTypes } from './../types/settingTypes';

export const switchSecureMode = (bool: boolean) => {
  return {
    type: SwitchActionTypes.SWITCH_SECURE,
    payload: bool,
  };
};

export const switchCurrentTheme = (bool: boolean) => {
  return {
    type: SwitchActionTypes.SWITCH_THEME,
    payload: bool,
  };
};

export const changeLanguage = (lang: string) => {
  return {
    type: SwitchActionTypes.SWITCH_LANGUAGE,
    payload: lang,
  };
};

export const isFirstInit = (bool: boolean) => {
  return {
    type: SwitchActionTypes.IS_INIT,
    payload: bool,
  };
};

export const isAccount = (bool: boolean) => {
  return {
    type: SwitchActionTypes.IS_ACCOUNT,
    payload: bool,
  };
};
