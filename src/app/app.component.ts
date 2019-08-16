import { Component } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { Router } from '@angular/router';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  get username(): Observable<string> {
    return this.store.select(x => x.auth.user.username)
  }

  get authenticated(): Observable<boolean> {
    return this.store.select(x => x.auth.authenticated)
  }

  logout() {
    this.authService.Logout();

    this.router.navigate(['auth', 'login']);
  }
}
