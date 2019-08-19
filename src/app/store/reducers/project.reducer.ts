import { ProjectActions, ProjectActionTypes } from 'src/app/store/actions/project.actions';
import { initialState, ProjectState } from '../state/project.state';

export function projectReducer(state = initialState, action: ProjectActions): ProjectState {
    switch (action.type) {
        case ProjectActionTypes.CREATE_PROJECT_SUCCESS: {
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        }
        case ProjectActionTypes.CREATE_PROJECT_DETAILS_SUCCESS: {
            return {
                ...state,
                projectDetails: [...state.projectDetails, action.payload]
            }
        }
        case ProjectActionTypes.FETCH_PROJECTS_SUCCESS: {
            return {
                ...state,
                projects: action.payload
            }
        }
        default:
            return state;
    }
}