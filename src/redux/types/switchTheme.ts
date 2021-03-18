export interface IInitState {
  theme: boolean;
}
export enum switchActionTypes {
  SWITCH_THEME = 'SWITCH_THEME',
}

interface SwitchThemes {
  type: switchActionTypes.SWITCH_THEME;
  payload: boolean;
}

export type IThemeActions = SwitchThemes;
