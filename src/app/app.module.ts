import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../@material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/shared/confirmation/confirmation.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AuthService } from './components/auth/auth.service';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { AuthLoginComponent } from './pages/login/auth-login.component';
import { ProjectAddDialogComponent } from './components/project/project-add/project-add.component';
import { projectReducer } from 'src/app/store/reducers/project.reducer';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { authReducer } from 'src/app/store/reducers/auth.reducer';
import { ProjectDetailsAddDialogComponent } from './components/project/project-details/project-details-add/project-details-add.component';
import { FhUploadComponent } from './components/input/fh-upload/fh-upload.component';
import { FhButtonComponent } from './components/input/fh-button/fh-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    HomeComponent,
    ConfirmationDialogComponent,

    FhUploadComponent,
    FhButtonComponent,

    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectAddDialogComponent,
    ProjectDetailsAddDialogComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      project: projectReducer,
      auth: authReducer
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    ProjectAddDialogComponent,
    ProjectDetailsAddDialogComponent
  ],
  providers: [
    { 
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB'
    }, /* dd/MM/yyyy format for datepicker */

    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
