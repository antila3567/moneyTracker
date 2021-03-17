import { switchActionTypes } from '../types/switchTheme';

export const switchCurrentTheme = (bool:boolean) => {
  return {
    type: switchActionTypes.SWITCH_THEME,
    payload: bool
  };
};
