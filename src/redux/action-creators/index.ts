import * as UserActionCreators from './users';
import * as SwitchThemeActionCreators from './switchTheme';
import * as AuthActionCreators from './authCreator';
import * as HomeActionCreators from './homeCreators';
import * as WalletActionCreators from './walletCreators';

export default {
  ...UserActionCreators,
  ...SwitchThemeActionCreators,
  ...AuthActionCreators,
  ...HomeActionCreators,
  ...WalletActionCreators
};
