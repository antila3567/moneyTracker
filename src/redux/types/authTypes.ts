export interface IAuthUser {
  user: {
    displayName: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata: {
      creationTime: number;
      lastSignInTime: number;
    };
    phoneNumber: null | number;
    photoURL: string;
  } | null;
}

export interface IAuth {
  secure: boolean;
  email: string;
  password: string;
  user: IAuthUser | null;
  token: string;
  error: string | null;
  initializing: boolean;
}

export enum IAuthTypes {
  SWITCH_SECURE = "SWITCH_SECURE",
  SET_PASSWORD = "SET_PASSWORD",
  SET_EMAIL = "SET_EMAIL",
  SET_ERROR = "SET_ERROR",
  SET_TOKEN = "SET_TOKEN",
  SET_USER = "SET_USER",
  SET_INIT = "SET_INIT",
  LOG_OUT = "LOG_OUT",
}

interface ISwitchSecure {
  type: IAuthTypes.SWITCH_SECURE;
  payload: boolean;
}
interface ISetPassword {
  type: IAuthTypes.SET_PASSWORD;
  payload: string;
}
interface ISetEmail {
  type: IAuthTypes.SET_EMAIL;
  payload: string;
}
interface ISetToken {
  type: IAuthTypes.SET_TOKEN;
  payload: string;
}
interface ISetUser {
  type: IAuthTypes.SET_USER;
  payload: IAuthUser;
}
interface ISetError {
  type: IAuthTypes.SET_ERROR;
  payload: string | null;
}
interface ISetInit {
  type: IAuthTypes.SET_INIT;
  payload: boolean;
}
interface ILogOut {
  type: IAuthTypes.LOG_OUT;
}

export type IAuthActions =
  | ISwitchSecure
  | ISetPassword
  | ISetEmail
  | ISetToken
  | ISetUser
  | ISetError
  | ISetInit
  | ILogOut;
