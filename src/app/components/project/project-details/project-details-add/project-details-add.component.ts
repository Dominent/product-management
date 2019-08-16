import { Component, Inject } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project-detail.model';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectImage } from 'src/app/models/project-image.model';
import { ProjectLink } from 'src/app/models/project-link.model';
import { ProjectTag } from 'src/app/models/project-tag.model';

@Component({
    templateUrl: 'project-details-add.component.html',
})
export class ProjectDetailsAddDialogComponent {
    private info: string;
    private description: string;
    private projectImages: ProjectImage[] = [];
    private projectLinks: ProjectLink[] = [];
    private projectTags: ProjectTag[] = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ProjectDetailsAddDialogComponent>,
    ) {
    }

    submitHandler() {
        debugger
    }

    onProjectImageAdd(image) {
        console.log(image)
    }

    onProjectLinkAdded() {
        this.projectLinks.push({ href: '', name: '' })
    }

    onProjectTagAdded() {
        this.projectTags.push({ name: '' })
    }
}