import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { AuthLoginComponent } from './pages/login/auth-login.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:id/details', component: ProjectDetailsComponent }
    ]
  },
  {
    path: 'auth', children: [
      { path: 'login', component: AuthLoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
