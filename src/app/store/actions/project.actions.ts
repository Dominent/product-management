import { Action } from '@ngrx/store';
import { Project } from 'src/app/models/project.model';
import { ProjectDetailInput } from 'src/app/models/input/project-detail-input.model';

export enum ProjectActionTypes {
    CREATE_PROJECT = 'CREATE_PROJECT',
    CREATE_PROJECT_DETAIL = 'CREATE_PROJECT_DETAIL',
}

export class CreateProjectAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT;

    constructor(public payload: Project) { }
}

export class CreateProjectDetailAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT_DETAIL;

    constructor(public payload: { projectId: number, projectDetail: ProjectDetailInput }) { }
}

export type ProjectActions =
    CreateProjectAction |
    CreateProjectDetailAction