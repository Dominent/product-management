import { Component, Inject } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project-detail.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectDetailInput } from 'src/app/models/input/project-detail-input.model';

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
    ) {
    }

    submitHandler() {
        console.log(this.projectDetail)
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