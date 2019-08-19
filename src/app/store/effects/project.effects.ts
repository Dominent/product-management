import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project.service';
import { AlertService, AlertContext, AlertType } from 'src/app/services/alert.service';
import { AppState } from '../app.state';
import { createProjectAction, createProjectSuccessAction, createProjectFailureAction, fetchProjectsAction, fetchProjectsSuccessAction, fetchProjectsFailureAction, createProjectDetailsAction, createProjectDetailsSuccessAction, createProjectDetailsFailureAction, fetchProjectDetailsAction, fetchProjectDetailsSuccessAction, fetchProjectDetailsFailureAction } from '../actions/project.actions';

@Injectable()
export class ProjectEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectService,
        private alertService: AlertService,
        private store: Store<AppState>
    ) { }

    @Effect()
    createProjectEffect$: Observable<Action> = this.actions$.pipe(
        ofType<ReturnType<typeof createProjectAction>>(createProjectAction.type),
        switchMap((props) => this.projectService.createProject(props)),
        map((res) => createProjectSuccessAction({payload: res})),
        catchError((err, caught) => {
            this.store.dispatch(createProjectFailureAction(err));
            return caught;
        })
    )

    @Effect()
    getProjectsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<ReturnType<typeof fetchProjectsAction>>(fetchProjectsAction.type),
        switchMap((props) => this.projectService.getProjects()),
        map((res) => fetchProjectsSuccessAction({ payload: res })),
        catchError((err, caught) => {
            this.store.dispatch(fetchProjectsFailureAction(err));
            return caught;
        })
    )

    @Effect()
    createProjectDetailsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<ReturnType<typeof createProjectDetailsAction>>(createProjectDetailsAction.type),
        switchMap((props) => this.projectService.createProjectDetails(
            props.projectId,
            props.projectDetail)),
        map((res) => createProjectDetailsSuccessAction({payload: res})),
        catchError((err, caught) => {
            this.store.dispatch(createProjectDetailsFailureAction(err));
            return caught;
        })
    )

    @Effect()
    getProjectDetailsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<ReturnType<typeof fetchProjectDetailsAction>>(fetchProjectDetailsAction.type),
        switchMap((props) => this.projectService.getProjectDetails(props.projectId)),
        map((res) => fetchProjectDetailsSuccessAction({ payload: res })),
        catchError((err, caught) => {
            this.store.dispatch(fetchProjectDetailsFailureAction(err));
            return caught;
        })
    )

    @Effect({ dispatch: false })
    createProjectDetailsEffectSuccess$ = this.actions$.pipe(
        ofType(
            createProjectDetailsSuccessAction.type,
            createProjectSuccessAction.type
        ),
        map((action) => this.alertService.show(new AlertContext(AlertType.Success,
            `Successfully created/edited/deleted: ${JSON.stringify(action)}`)))
    )

    @Effect({ dispatch: false })
    createProjectDetailsEffectFailure$ = this.actions$.pipe(
        ofType(
            createProjectDetailsFailureAction.type,
            createProjectFailureAction.type
        ),
        map((action) => this.alertService.show(new AlertContext(AlertType.Failure,
            `Failed to create/edit/delete: ${JSON.stringify(action)}`)))
    )
}