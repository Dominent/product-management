import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private isAuthenticated = false;

    public Login(): void {
        this.isAuthenticated = true;
    }

    public IsAuthenticated (): boolean {
        return this.isAuthenticated;
    }

    public Logout(): void {
        this.isAuthenticated = false;
    }
}