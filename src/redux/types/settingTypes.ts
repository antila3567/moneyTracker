export interface ISettingState {
  secure: boolean;
  language: string;
  theme: boolean;
  isInit: boolean;
  isAccount: boolean;
}
export enum SwitchActionTypes {
  SWITCH_SECURE = 'SWITCH_SECURE',
  SWITCH_LANGUAGE = 'SWITCH_LANGUAGE',
  SWITCH_THEME = 'SWITCH_THEME',
  IS_INIT = 'IS_INIT',
  IS_ACCOUNT = 'IS_ACCOUNT',
}

interface ISwitchSecure {
  type: SwitchActionTypes.SWITCH_SECURE;
  payload: boolean;
}
interface ISwitchLanguage {
  type: SwitchActionTypes.SWITCH_LANGUAGE;
  payload: string;
}

interface ISwitchThemes {
  type: SwitchActionTypes.SWITCH_THEME;
  payload: boolean;
}
interface IIsInit {
  type: SwitchActionTypes.IS_INIT;
  payload: boolean;
}
interface IsAccount {
  type: SwitchActionTypes.IS_ACCOUNT;
  payload: boolean;
}

export type ISettingActions =
  | IIsInit
  | ISwitchSecure
  | ISwitchLanguage
  | ISwitchThemes
  | IsAccount;
