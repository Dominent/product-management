import { Component, OnInit } from "@angular/core";
import { Project } from 'src/app/models/project.model';
import { MatDialog } from '@angular/material';
import { ProjectAddDialogComponent } from 'src/app/components/project/project-add/project-add.component';
import { AppState } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectProjects } from 'src/app/store/selectors/project.selector';
import { fetchProjectsAction } from 'src/app/store/actions/project.actions';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {
    constructor(
        private dialog: MatDialog,
        private store: Store<AppState>,
        private router: Router
    ) { 
        this.store.dispatch(fetchProjectsAction());
    }
    
    projects$ = this.store.pipe(select(selectProjects));

    public displayedColumns: string[] = ['id', 'title', 'location', 'startDate', 'endDate', 'ongoing', 'edit', 'delete'];

    public createProjectHandler(){
        this.dialog.open(ProjectAddDialogComponent, {
            width: '500px'
        })
    }

    public editProjectHandler(project: Project) {

    }

    public deleteProjectHandler(project: Project) {

    }

    public onRowClicked(project: Project) {
        this.router.navigate(['projects', project.id, 'details']);
    }
}