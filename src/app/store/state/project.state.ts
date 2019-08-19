import { Project } from 'src/app/models/project.model';
import { ProjectDetail } from 'src/app/models/project-detail.model';

export interface ProjectState {
    projects: Project[]
    projectDetails: ProjectDetail
}

export const initialState: ProjectState = {
    projects: [],
    projectDetails: null
}
