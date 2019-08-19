import { AppState } from "../app.state";
import { createSelector } from '@ngrx/store';
import { AuthState } from '../state/auth.state';

const authState = (state: AppState) => state.auth;

export const selectUsername = createSelector(
    authState,
    (state: AuthState) => state.user.username
)

export const selectAuthenticated =  createSelector(
    authState,
    (state: AuthState) => state.authenticated
)