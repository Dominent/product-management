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
    CreateProjectDetailsAction,
    CreateProjectDetailsFailureAction,
    FetchProjectsAction,
    FetchProjectsSuccessAction,
    FetchProjectsFailureAction
} from '../actions/project.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project.service';
import { AlertService, AlertContext, AlertType } from 'src/app/services/alert.service';

@Injectable()
export class ProjectEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectService,
        private alertService: AlertService
    ) { }

    @Effect()
    createProjectEffect$: Observable<Action> = this.actions$.pipe(
        ofType<CreateProjectAction>(ProjectActionTypes.CREATE_PROJECT),
        switchMap((action) => this.projectService.createProject(action.payload)),
        map((res) => new CreateProjectSuccessAction(res)),
        catchError((err) => of(new CreateProjectFailureAction(err)))
    )

    @Effect()
    getProjectsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<FetchProjectsAction>(ProjectActionTypes.FETCH_PROJECTS),
        switchMap((action) => this.projectService.getProjects()),
        map((res) => new FetchProjectsSuccessAction(res)),
        catchError((err) => of(new FetchProjectsFailureAction(err)))
    )

    @Effect()
    createProjectDetailsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<CreateProjectDetailsAction>(ProjectActionTypes.CREATE_PROJECT_DETAILS),
        switchMap((action) => this.projectService.createProjectDetails(
            action.payload.projectId,
            action.payload.projectDetail)),
        map((res) => new CreateProjectDetailsSuccessAction(res)),
        catchError((err) => of(new CreateProjectDetailsFailureAction(err)))
    )

    @Effect({ dispatch: false })
    createProjectDetailsEffectSuccess$ = this.actions$.pipe(
        ofType(
            ProjectActionTypes.CREATE_PROJECT_DETAILS_SUCCESS,
            ProjectActionTypes.CREATE_PROJECT_SUCCESS
        ),
        map((action) => this.alertService.show(new AlertContext(AlertType.Success,
            `Successfully created/edited/deleted: ${JSON.stringify(action)}`)))
    )

    @Effect({ dispatch: false })
    createProjectDetailsEffectFailure$ = this.actions$.pipe(
        ofType(
            ProjectActionTypes.CREATE_PROJECT_DETAILS_FAILURE,
            ProjectActionTypes.CREATE_PROJECT_FAILURE
        ),
        map((action) => this.alertService.show(new AlertContext(AlertType.Failure,
            `Failed to create/edit/delete: ${JSON.stringify(action)}`)))
    )
}