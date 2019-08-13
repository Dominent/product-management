import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { AuthLoginComponent } from './pages/login/auth-login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth/login',
    component: AuthLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
