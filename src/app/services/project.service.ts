import { Injectable } from "@angular/core";
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';
import { ProjectInput } from '../models/input/project-input.model';
import { HttpClient } from '@angular/common/http';
import { ProjectDetailInput } from '../models/input/project-detail-input.model';
import { ProjectDetail } from '../models/project-detail.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProjectService {
    private readonly url = `${environment.API_URL}/projects`;

    constructor(
        private httpClient: HttpClient
    ){}

    createProject(project: ProjectInput): Observable<Project> {
        return this.httpClient.post<Project>(this.url, project);
    }

    createProjectDetails(projectId: number, projectDetails: ProjectDetailInput): Observable<ProjectDetail> {
        return this.httpClient.post<ProjectDetail>(`${this.url}/${projectId}/details`, projectDetails);
    }

    getProjects(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.url);
    }

    getProjectDetails(projectId: number): Observable<ProjectDetail> {
        return this.httpClient.get<ProjectDetail>(`${this.url}/${projectId}/details`);
    }
}
