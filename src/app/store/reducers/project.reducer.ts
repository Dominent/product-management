import { ProjectState } from "src/app/store/state/project.state";
import { ProjectActions, ProjectActionTypes } from 'src/app/store/actions/project.actions';

const initialState: ProjectState = {
    projects: [
        { id: 1, location: 'remote', title: '4Hundred', startDate: new Date('06/16/2017'), endDate: new Date('12/10/2018'), ongoing: false },
        { id: 2, location: 'remote', title: 'StampinUp', startDate: new Date('06/16/2017'), endDate: new Date('12/10/2018'), ongoing: false }
    ],
    projectDetails: [
        { id: 1, projectId: 1, info: '4hundred - https://www.4hundred.com/', description: 'Developed custom admin solution that helped reduce the manual load on the support team. Reduced ticket resolve time by more than 40% which increased the overall customer satisfaction. Implemented a system wide change auditing and logging functionality which helped increase the transparency of the changes that were made.', images: [{id: 1, path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Isu152_Kubinka.jpg/300px-Isu152_Kubinka.jpg', alt: 'ISU 152'}, {id: 2, path: 'http://www.tanks-encyclopedia.com/wp-content/uploads/2016/09/Object-247.jpg', alt: 'ISU 152 BLACK/WHITE'}], links: [{ id: 1, name: 'website', href: 'https://www.4hundred.com/' }], tags: [{ id: 1, name: 'Angular 2+' }, { id: 2, name: 'C#' }, { id: 3, name: 'HTML5' }, { id: 4, name: 'CSS3' }] },
    ]
}

export function projectReducer(state = initialState, action: ProjectActions): ProjectState {
    switch (action.type) {
        case ProjectActionTypes.CREATE_PROJECT:
            return { ...state, projects: [...state.projects, action.payload] }
        case ProjectActionTypes.CREATE_PROJECT_DETAIL:
            return { ...state, projectDetails: [...state.projectDetails, {
                id: null,
                projectId: action.payload.projectId,
                info: action.payload.projectDetail.info,
                description: action.payload.projectDetail.description,
                images: [],
                links: [],
                tags: []
            }]}
        default:
            return state;
    }
}