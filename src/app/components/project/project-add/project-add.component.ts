import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { ProjectInput } from 'src/app/models/input/project-input.model';
import { createProjectAction } from 'src/app/store/actions/project.actions';

@Component({
    templateUrl: 'project-add.component.html',
    styleUrls: ['project-add.component.scss']
})
export class ProjectAddDialogComponent {
    public formData: FormGroup;
    public image: { name: string, value: string };

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

    onProjectImageAdd(image) {
        this.image = image;
    }

    submitHandler(project: ProjectInput) {
        if (this.image) {
            project.image = this.image.value;
        }

        this.store.dispatch(createProjectAction(project));
        this.dialogRef.close();
    }

    cancelHandler() {
        this.dialogRef.close();
    }
}