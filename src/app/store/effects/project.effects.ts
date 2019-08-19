import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
    ProjectActionTypes,
    CreateProjectAction,
    CreateProjectSuccessAction,
    CreateProjectFailureAction,
    CreateProjectDetailsSuccessAction,
    CreateProjectDetailsAction
} from '../actions/project.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project.service';

@Injectable()
export class ProjectEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectService
    ) { }

    @Effect()
    createProjectEffect$: Observable<Action> = this.actions$.pipe(
        ofType<CreateProjectAction>(ProjectActionTypes.CREATE_PROJECT),
        switchMap((action) => this.projectService.createProject(action.payload)),
        map((res) => new CreateProjectSuccessAction(res)),
        catchError((err) => of(new CreateProjectFailureAction(err)))
    )

    @Effect()
    createProjectDetailsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<CreateProjectDetailsAction>(ProjectActionTypes.CREATE_PROJECT_DETAILS),
        switchMap((action) => this.projectService.createProjectDetails(
            action.payload.projectId,
            action.payload.projectDetail)),
        map((res) => new CreateProjectDetailsSuccessAction(res)),
        catchError((err) => of(new CreateProjectFailureAction(err)))
    )
}