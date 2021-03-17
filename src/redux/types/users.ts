export interface IInitState {
    users: any[],
    loading: boolean,
    error: null | string
}
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_FAILED,
    payload: string;
}


export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
