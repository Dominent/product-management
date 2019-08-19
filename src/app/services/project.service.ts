import { Injectable } from "@angular/core";
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';
import { ProjectInput } from '../models/input/project-input.model';
import { HttpClient } from '@angular/common/http';
import { ProjectDetailInput } from '../models/input/project-detail-input.model';
import { ProjectDetail } from '../models/project-detail.model';

@Injectable()
export class ProjectService {
    constructor(
        private httpClient: HttpClient
    ){}

    createProject(project: ProjectInput): Observable<Project> {
        return of({} as Project)
    }

    createProjectDetails(projectId: number, projectDetails: ProjectDetailInput): Observable<ProjectDetail> {
        return of({} as ProjectDetail)
    }
}
