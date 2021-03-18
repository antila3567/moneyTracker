import * as UserActionCreators from './users';
import * as SwitchThemeActionCreators from './switchTheme';
import * as AuthActionCreators from './authCreator';

export default {
  ...UserActionCreators,
  ...SwitchThemeActionCreators,
  ...AuthActionCreators,
};
