import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { loginUserAction, logoutUserAction } from 'src/app/store/actions/auth.actions';

@Injectable()
export class AuthService {
    constructor(
        private store: Store<AppState>
    ) {}

    public Login(login: Login): void {
        this.store.dispatch(loginUserAction(login))
    }
    public Logout(): void {
        this.store.dispatch(logoutUserAction())
    }
}