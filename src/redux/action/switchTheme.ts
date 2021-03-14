export const SWITCH_THEME = "SWITCH_THEME";

export const switchTheme = (bool: boolean) => {
  console.log("bo", bool);
  return {
    type: SWITCH_THEME,
    payload: bool,
  };
};
