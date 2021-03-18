import { IAuth, IAuthActions, IAuthTypes } from './../types/authTypes';

const init: IAuth = {
  secure: true,
  email: '',
  password: '',
  user: null,
  token: '',
  error: null,
  initializing: true,
};

const authReducer = (state = init, action: IAuthActions): IAuth => {
  switch (action.type) {
    case IAuthTypes.SWITCH_SECURE:
      return { ...state, secure: action.payload };
    case IAuthTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case IAuthTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case IAuthTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case IAuthTypes.SET_USER:
      return { ...state, user: action.payload };
    case IAuthTypes.SET_INIT:
      return { ...state, initializing: action.payload };
    case IAuthTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case IAuthTypes.LOG_OUT:
      return { ...state, user: null, token: '' };
    default:
      return state;
  }
};

export default authReducer;
