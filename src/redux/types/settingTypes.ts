export interface ISettingState {
  secure: boolean;
  language: string;
  theme: boolean;
}
export enum SwitchActionTypes {
  SWITCH_SECURE = 'SWITCH_SECURE',
  SWITCH_LANGUAGE = 'SWITCH_LANGUAGE',
  SWITCH_THEME = 'SWITCH_THEME',
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

export type ISettingActions = ISwitchSecure | ISwitchLanguage | ISwitchThemes;
