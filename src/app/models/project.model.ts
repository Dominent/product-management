import { ProjectDetail } from './project-detail.model';

export interface Project {
    id: number;
    title: string;
    location: string;
    startDate: Date;
    endDate: Date;
    ongoing: boolean;
}
