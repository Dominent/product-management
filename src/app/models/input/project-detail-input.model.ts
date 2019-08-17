import { ImageInput } from './image-input.model';
import { LinkInput } from './link-Input.model';
import { TagInput } from './tag-input';

export interface ProjectDetailInput {
    projectId: number
    info: string;
    description: string;
    images: ImageInput[];
    links: LinkInput[];
    tags: TagInput[];
}
