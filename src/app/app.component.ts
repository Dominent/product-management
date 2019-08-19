import { Component } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { Router } from '@angular/router';
import { AppState } from './store/app.state';
import { Store, select } from '@ngrx/store';
import { selectLoading } from './store/selectors/loading.selector';
import { selectAuthenticated, selectUsername } from './store/selectors/auth.selector';

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

  loading$ = this.store.pipe(select(selectLoading))
  authenticated$ = this.store.pipe(select(selectAuthenticated))
  username$ = this.store.pipe(select(selectUsername))

  logout() {
    this.authService.Logout();

    this.router.navigate(['auth', 'login']);
  }
}
