import { Component } from "@angular/core";
import { Project } from 'src/app/models/project.model';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ProjectAddDialogComponent } from 'src/app/components/project/project-add/project-add.component';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {
    constructor(
        private dialog: MatDialog
    ) {
    }

    createProjectHandler(){
        this.dialog.open(ProjectAddDialogComponent, {
            width: '500px'
        })
    }

    editProjectHandler(project: Project) {

    }

    deleteProjectHandler(project: Project) {

    }
}