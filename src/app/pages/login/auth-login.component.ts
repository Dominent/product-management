import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/components/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';

@Component({
    templateUrl: 'auth-login.component.html',
    styleUrls: ['auth-login.component.scss']
})
export class AuthLoginComponent {
    public formData: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.formData = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        })        
    }

    public submitHandler(login: Login) {
        this.authService.Login(login);

        this.router.navigate(['']);
    }
}

