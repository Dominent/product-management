import { ProjectState } from './state/project.state';
import { AuthState } from './state/auth.state';

export interface AppState {
    readonly project: ProjectState;
    readonly auth: AuthState;
    readonly loading: boolean
}