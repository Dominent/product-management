import { loginUserAction, logoutUserAction } from '../actions/auth.actions';
import { initialState, AuthState } from '../state/auth.state';

export function authReducer(state = initialState, action): AuthState {
    switch (action.type) {
        case loginUserAction.type: {
            return {
                ...state,
                authenticated: true,
                user: { username: action.username }
            };
        }
        case logoutUserAction.type: {
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