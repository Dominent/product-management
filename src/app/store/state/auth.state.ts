import { User } from 'src/app/components/auth/user.model';

export interface AuthState {
    user: User,
    authenticated: boolean
}

export const initialState: AuthState = {
    user: null,
    authenticated: false
}

