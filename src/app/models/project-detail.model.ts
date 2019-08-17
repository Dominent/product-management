import { Link } from './link.model';
import { Image } from './image.model';
import { Tag } from './tag.model';

export interface ProjectDetail {
    id: number;
    projectId: number;
    info: string;
    description: string;
    images: Image[];
    links: Link[];
    tags: Tag[];
}
