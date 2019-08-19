import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EnableLoadingAction, DisableLoadingAction } from '../actions/loading.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { 
    createProjectAction,
    createProjectDetailsAction,
    fetchProjectsAction,
    fetchProjectDetailsAction,
    createProjectDetailsSuccessAction,
    createProjectDetailsFailureAction,
    createProjectSuccessAction,
    createProjectFailureAction,
    fetchProjectsSuccessAction,
    fetchProjectsFailureAction,
    fetchProjectDetailsSuccessAction,
    fetchProjectDetailsFailureAction
} from '../actions/project.actions';

@Injectable()
export class LoadingEffects {
    constructor(
        private _actions: Actions,
    ) { }

    @Effect()
    enableLoading: Observable<Action> = this._actions.pipe(
        ofType(
            createProjectAction.type,
            createProjectDetailsAction.type,

            fetchProjectsAction.type,
            fetchProjectDetailsAction.type
        ),
        map((action) => new EnableLoadingAction())
    );

    @Effect()
    disableLoading: Observable<Action> = this._actions.pipe(
        ofType(
            createProjectDetailsSuccessAction.type,
            createProjectDetailsFailureAction.type,

            createProjectSuccessAction.type,
            createProjectFailureAction.type,

            fetchProjectsSuccessAction.type,
            fetchProjectsFailureAction.type,

            fetchProjectDetailsSuccessAction.type,
            fetchProjectDetailsFailureAction.type
        ),
        map((action) => new DisableLoadingAction())
    )
}