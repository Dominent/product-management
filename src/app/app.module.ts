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

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    HomeComponent,
    ProjectsComponent,
    ConfirmationDialogComponent,

    ProjectAddDialogComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      // Register reducers here
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    
    ProjectAddDialogComponent
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
