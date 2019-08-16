import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { CreateProjectAction } from 'src/app/store/actions/project.actions';

@Component({
    templateUrl: 'project-add.component.html',
    styleUrls: ['project-add.component.scss']
})
export class ProjectAddDialogComponent {
    public formData: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ProjectAddDialogComponent>,
        private store: Store<AppState>
    ) {
        this.formData = new FormGroup({
            title: new FormControl(),
            location: new FormControl(),
            startDate: new FormControl(),
            endDate: new FormControl(),
            ongoing: new FormControl()
        });
    }

    submitHandler(project: Project) {
        this.store.dispatch(new CreateProjectAction(project));
        this.dialogRef.close();
    }

    cancelHandler() {
        this.dialogRef.close();
    }
}