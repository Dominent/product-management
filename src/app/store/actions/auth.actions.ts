import { Action } from '@ngrx/store';
import { Login } from 'src/app/models/login.model';

export enum AuthActionTypes {
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER'
}

export class LoginUserAction implements Action {
    public readonly type = AuthActionTypes.LOGIN_USER;

    constructor(public payload: Login) { }
}

export class LogoutUserAction implements Action {
    public readonly type = AuthActionTypes.LOGOUT_USER;

    constructor() { }
}

export type AuthActions =
    LoginUserAction |
    LogoutUserAction;