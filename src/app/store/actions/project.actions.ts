import { Action } from '@ngrx/store';
import { Project } from 'src/app/models/project.model';
import { ProjectDetailInput } from 'src/app/models/input/project-detail-input.model';
import { ProjectInput } from 'src/app/models/input/project-input.model';
import { ProjectDetail } from 'src/app/models/project-detail.model';

export enum ProjectActionTypes {
    CREATE_PROJECT = 'CREATE_PROJECT',
    CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS',
    CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE',

    CREATE_PROJECT_DETAILS = 'CREATE_PROJECT_DETAILS',
    CREATE_PROJECT_DETAILS_SUCCESS = 'CREATE_PROJECT_DETAILS_SUCCESS',
    CREATE_PROJECT_DETAILS_FAILURE = 'CREATE_PROJECT_DETAILS_FAILURE',

    FETCH_PROJECTS = 'FETCH_PROJECTS',
    FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
    FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_SUCCESS',
}

/* Create Project Actions Start */
export class CreateProjectAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT;

    constructor(public payload: ProjectInput) { }
}

export class CreateProjectSuccessAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT_SUCCESS;

    constructor(public payload: Project) { }
}

export class CreateProjectFailureAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT_FAILURE;

    constructor(public payload: any) { }
}
/* Create Project Actions End */

/* Create Project Details Actions Start */
export class CreateProjectDetailsAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT_DETAILS;

    constructor(public payload: { projectId: number, projectDetail: ProjectDetailInput }) { }
}

export class CreateProjectDetailsSuccessAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT_DETAILS_SUCCESS;

    constructor(public payload: ProjectDetail) { }
}

export class CreateProjectDetailsFailureAction implements Action {
    public readonly type = ProjectActionTypes.CREATE_PROJECT_DETAILS_FAILURE;

    constructor(public payload: any) { }
}
/* Create Project Details Actions End */

/* Fetch Projects Actions Start */
export class FetchProjectsAction implements Action {
    public readonly type = ProjectActionTypes.FETCH_PROJECTS
}

export class FetchProjectsSuccessAction implements Action {
    public readonly type = ProjectActionTypes.FETCH_PROJECTS_SUCCESS;

    constructor(public payload: Project[]) { }
}

export class FetchProjectsFailureAction implements Action {
    public readonly type = ProjectActionTypes.FETCH_PROJECTS_FAILURE;

    constructor(public payload: any) { }
}
/* Fetch Projects Actions End */

export type ProjectActions =
    CreateProjectAction |
    CreateProjectSuccessAction |
    CreateProjectFailureAction |
    CreateProjectDetailsAction |
    CreateProjectDetailsSuccessAction |
    CreateProjectDetailsFailureAction |
    FetchProjectsAction |
    FetchProjectsSuccessAction |
    FetchProjectsFailureAction;
    