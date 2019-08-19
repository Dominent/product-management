import { AppState } from "../app.state";
import { createSelector } from '@ngrx/store';
import { ProjectState } from '../state/project.state';

const projectState = (state: AppState) => state.project;

export const selectProjects = createSelector(
    projectState,
    (state: ProjectState) => state.projects
)

export const selectProjectDetails = createSelector(
    projectState,
    (state: ProjectState) => state.projectDetails
)
