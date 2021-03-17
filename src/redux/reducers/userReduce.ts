import { UserAction, IInitState, UserActionTypes } from './../types/users';

const init:IInitState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = init, action:UserAction): IInitState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_FAILED:
            return {...state, loading: false, error: action.payload, users: []}
        default:
            return state;
    }
}

export default userReducer;