import { createAction, props } from '@ngrx/store';
import { Login } from 'src/app/models/login.model';

export const loginUserAction = createAction('LOGIN_USER', props<Login>());
export const logoutUserAction = createAction('LOGOUT_USER');