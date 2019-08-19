import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { initialState, AuthState } from '../state/auth.state';

export function authReducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_USER: {
            return {
                ...state,
                authenticated: true,
                user: { username: action.payload.username }
            };
        }
        case AuthActionTypes.LOGOUT_USER: {
            return {
                ...state,
                authenticated: false,
                user: null
            };
        }
        default:
            return state;
    }
}