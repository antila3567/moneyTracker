import { Dispatch } from 'redux';
import { UserActionTypes, UserAction } from '../types/users';

export const fetchUsers = () => {
    return async(dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: json})
            })
        } catch (error) {
            dispatch({type: UserActionTypes.FETCH_USERS_FAILED, payload: error.message})
        }
    }
}