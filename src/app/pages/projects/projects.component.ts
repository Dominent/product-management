import { Component } from "@angular/core";
import { Project } from 'src/app/models/project.model';
import { Observable, of } from 'rxjs';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {
    createProjectHandler(){
        
    }

    editProjectHandler(project: Project) {

    }

    deleteProjectHandler(project: Project) {

    }
}