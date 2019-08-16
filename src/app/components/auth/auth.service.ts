import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { LoginUserAction, LogoutUserAction } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        private store: Store<AppState>
    ) {}

    public Login(login: Login): void {
        this.store.dispatch(new LoginUserAction(login))
    }
    public Logout(): void {
        this.store.dispatch(new LogoutUserAction())
    }
}