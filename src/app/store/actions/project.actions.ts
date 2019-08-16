import { Action } from '@ngrx/store';
import { Project } from 'src/app/models/project.model';

export enum ProjectActionTypes {
    CREATE_PROJECT = 'CREATE_PROJECT',
}

export class CreateProjectAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT;

    constructor(public payload: Project) { }
}

export type ProjectActions = 
    CreateProjectAction