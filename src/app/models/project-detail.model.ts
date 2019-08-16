import { ProjectImage } from './project-image.model';
import { ProjectLink } from './project-link.model';
import { ProjectTag } from './project-tag.model';

export interface ProjectDetail {
    id: number;
    info: string;
    description: string;
    projectDetailImages: ProjectImage[];
    projectDetailLinks: ProjectLink[];
    projectDetailTags: ProjectTag[];
}
