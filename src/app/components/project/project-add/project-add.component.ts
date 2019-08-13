import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectCreateInputModel } from 'src/app/models/project-create-input.model';

@Component({
    templateUrl: 'project-add.component.html',
})
export class ProjectAddDialogComponent {
    public formData: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ProjectAddDialogComponent>
    ) {
        this.formData = new FormGroup({
            title: new FormControl(),
            location: new FormControl(),
            startDate: new FormControl(),
            endDate: new FormControl(),
        });
    }

    submitHandler(project: ProjectCreateInputModel) {
        console.log(project);
    }

    cancelHandler() {
        this.dialogRef.close();
    }
}