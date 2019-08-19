import { createAction, props } from '@ngrx/store';
import { Project } from 'src/app/models/project.model';
import { ProjectDetailInput } from 'src/app/models/input/project-detail-input.model';
import { ProjectInput } from 'src/app/models/input/project-input.model';
import { ProjectDetail } from 'src/app/models/project-detail.model';

export const createProjectDetailsAction = createAction('CREATE_PROJECT_DETAILS', props<{ projectId: number, projectDetail: ProjectDetailInput }>())
export const createProjectDetailsSuccessAction = createAction('CREATE_PROJECT_DETAILS_SUCCESS', props<{ payload: ProjectDetail }>())
export const createProjectDetailsFailureAction = createAction('CREATE_PROJECT_DETAILS_FAILURE', props<{ payload: any }>())

export const fetchProjectDetailsAction = createAction('FETCH_PROJECT_DETAILS', props<{ projectId: number }>())
export const fetchProjectDetailsSuccessAction = createAction('FETCH_PROJECT_DETAILS_SUCCESS', props<{ payload: ProjectDetail }>())
export const fetchProjectDetailsFailureAction = createAction('FETCH_PROJECT_DETAILS_Failure', props<{ payload: any }>())

export const createProjectAction = createAction('CREATE_PROJECT', props<ProjectInput>());
export const createProjectSuccessAction = createAction('CREATE_PROJECT_SUCCESS', props<{ payload: Project }>());
export const createProjectFailureAction = createAction('CREATE_PROJECT_FAILURE', props<{ payload: any }>());

export const fetchProjectsAction = createAction('FETCH_PROJECTS');
export const fetchProjectsSuccessAction = createAction('FETCH_PROJECTS_SUCCESS', props<{ payload: Project[] }>());
export const fetchProjectsFailureAction = createAction('FETCH_PROJECTS_FAILURE', props<{ payload: any }>());
