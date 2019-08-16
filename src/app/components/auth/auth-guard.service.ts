import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        public authService: AuthService,
        public router: Router,
        public store: Store<AppState>
    ) { }

    public get authenticated(): Observable<boolean> {
        return this.store.select(x => x.auth.authenticated);
    } 

    public canActivate(): Observable<boolean> {
        return this.authenticated.pipe(
            map(res => {
                if (!res) {
                    this.router.navigate(['auth', 'login']);
                    return false;
                }

                return true;
            })
        )
    }
}