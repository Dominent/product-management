import { ProjectState } from "src/app/store/state/project.state";
import { ProjectActions, ProjectActionTypes } from 'src/app/store/actions/project.actions';

const initialState: ProjectState = {
    projects: [
        { id: 1, location: 'remote', title: '4Hundred', startDate: new Date('06/16/2017'), endDate: new Date('12/10/2018'), ongoing: false },
        { id: 2, location: 'remote', title: 'StampinUp', startDate: new Date('06/16/2017'), endDate: new Date('12/10/2018'), ongoing: false }
    ]
}

export function projectReducer(state = initialState, action: ProjectActions): ProjectState {
    switch (action.type) {
        case ProjectActionTypes.CREATE_PROJECT:
            return { ...state, projects: [...state.projects, action.payload] }
        default:
            return state;
    }
}