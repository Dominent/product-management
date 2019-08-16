import { User } from 'src/app/components/auth/user.model';

export interface AuthState {
    user: User,
    authenticated: boolean
}