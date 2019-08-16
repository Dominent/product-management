import { ProjectState } from 'src/app/store/state/project.state';
import { AuthState } from 'src/app/store/state/auth.state';

export interface AppState {
    readonly project: ProjectState
    readonly auth: AuthState
}