import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectDetailInput } from 'src/app/models/input/project-detail-input.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { createProjectDetailsAction } from 'src/app/store/actions/project.actions';

@Component({
    templateUrl: 'project-details-add.component.html',
})
export class ProjectDetailsAddDialogComponent {
    private projectDetail = {
        images: [],
        links: [],
        tags: []
    } as ProjectDetailInput;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
        public dialogRef: MatDialogRef<ProjectDetailsAddDialogComponent>,
        private store: Store<AppState>
    ) { }

    submitHandler() {
        this.store.dispatch(createProjectDetailsAction({
            projectId: this.data.projectId,
            projectDetail: this.projectDetail
        }))
    }

    onProjectImageAdd(image) {
        this.projectDetail.images.push({ value: image.value })
    }

    onProjectLinkAdded() {
        this.projectDetail.links.push({ href: '', name: '' })
    }

    onProjectTagAdded() {
        this.projectDetail.tags.push({ name: '' })
    }
}