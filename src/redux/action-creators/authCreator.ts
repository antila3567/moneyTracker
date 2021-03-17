import { IAuthTypes, IAuthUser } from './../types/authTypes';

export const switchSecure = (bool:boolean) => {
  return {
    type: IAuthTypes.SWITCH_SECURE,
    payload: bool
  };
};

export const setUserEmail = (email:string) => {
  return {
    type: IAuthTypes.SET_EMAIL,
    payload: email
  };
};

export const setUserPassword = (password:string) => {
  return {
    type: IAuthTypes.SET_PASSWORD,
    payload: password
  };
};

export const setUserInfo = (user:IAuthUser) => {
  return {
    type: IAuthTypes.SET_USER,
    payload: user
  };
};

export const setUserToken = (token:string) => {
  return {
    type: IAuthTypes.SET_TOKEN,
    payload: token
  };
};

export const setUserError = (error:string | null) => {
  return {
    type: IAuthTypes.SET_ERROR,
    payload: error
  };
};

export const setInit = (bool:boolean) => {
  return {
    type: IAuthTypes.SET_INIT,
    payload: bool
  };
};

export const goLogOut = () => {
  return {
    type: IAuthTypes.LOG_OUT,
  };
};
