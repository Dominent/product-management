import { Component } from "@angular/core";
import { Project } from 'src/app/models/project.model';
import { MatDialog } from '@angular/material';
import { ProjectAddDialogComponent } from 'src/app/components/project/project-add/project-add.component';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {
    constructor(
        private dialog: MatDialog,
        private store: Store<AppState>,
        private router: Router
    ) { }

    public displayedColumns: string[] = ['id', 'title', 'location', 'startDate', 'endDate', 'ongoing', 'edit', 'delete'];

    public createProjectHandler(){
        this.dialog.open(ProjectAddDialogComponent, {
            width: '500px'
        })
    }

    public get projects (): Observable<Project[]> {
        return this.store.select(x => x.project.projects);
    }

    public editProjectHandler(project: Project) {

    }

    public deleteProjectHandler(project: Project) {

    }

    public onRowClicked(project: Project) {
        this.router.navigate(['projects', project.id, 'details']);
    }
}