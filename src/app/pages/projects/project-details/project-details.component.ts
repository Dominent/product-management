import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDetailsAddDialogComponent } from 'src/app/components/project/project-details/project-details-add/project-details-add.component';
import { ProjectDetail } from 'src/app/models/project-detail.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Link } from 'src/app/models/link.model';
import { Image } from 'src/app/models/image.model';

@Component({
    templateUrl: 'project-details.component.html',
    styleUrls: ['project-details.component.scss']
})
export class ProjectDetailsComponent {
    private projectId: number;

    public displayedColumns: string[] = ['id', 'name', 'href']

    constructor(
        private dialog: MatDialog,
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(x => {
            this.projectId = +x['id'];
        });
    }

    public createProjectDetails() {
        this.dialog.open(ProjectDetailsAddDialogComponent, {
            width: '1000px',
            data: { projectId: this.projectId }
        })
    }

    public get projectDetail(): Observable<ProjectDetail> {
        return this.store.select(x => x.project.projectDetails
            .find(x => x.projectId === this.projectId)
        )
    }

    public get projectLinks(): Observable<Link[]> {
        return this.projectDetail.pipe(
            map(x => x.links)
        )
    }

    public get projectImages(): Observable<Image[]> {
        return this.projectDetail.pipe(
            map(x => x.images)
        )
    }
}