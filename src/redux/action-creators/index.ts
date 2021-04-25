import * as UserActionCreators from './users';
import * as AuthActionCreators from './authCreator';
import * as HomeActionCreators from './homeCreators';
import * as WalletActionCreators from './walletCreators';
import * as SettingActionCreators from './settingCreators';
import * as FilterActionCreators from './dateAmountCreators';

export default {
  ...UserActionCreators,
  ...AuthActionCreators,
  ...HomeActionCreators,
  ...WalletActionCreators,
  ...SettingActionCreators,
  ...FilterActionCreators,
};
