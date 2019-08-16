import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDetailsAddDialogComponent } from 'src/app/components/project/project-details/project-details-add/project-details-add.component';

@Component({
    templateUrl: 'project-details.component.html',
    styleUrls: ['project-details.component.scss']
})
export class ProjectDetailsComponent {
    constructor(private dialog: MatDialog) {
    }

    public createProjectDetails() {
        this.dialog.open(ProjectDetailsAddDialogComponent, {
            width: '1000px'
        })
    }
}