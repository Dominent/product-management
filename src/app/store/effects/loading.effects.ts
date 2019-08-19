import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EnableLoadingAction, DisableLoadingAction } from '../actions/loading.actions';
import { Observable } from 'rxjs';
import { ProjectActionTypes } from '../actions/project.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class LoadingEffects {
    constructor(
        private _actions: Actions,
    ) { }

    @Effect()
    enableLoading: Observable<Action> = this._actions.pipe(
        ofType(
            ProjectActionTypes.CREATE_PROJECT,
            ProjectActionTypes.CREATE_PROJECT_DETAILS
        ),
        map((action) => new EnableLoadingAction())
    );

    @Effect()
    disableLoading: Observable<Action> = this._actions.pipe(
        ofType(
            ProjectActionTypes.CREATE_PROJECT_DETAILS_SUCCESS,
            ProjectActionTypes.CREATE_PROJECT_DETAILS_FAILURE,
            ProjectActionTypes.CREATE_PROJECT_SUCCESS,
            ProjectActionTypes.CREATE_PROJECT_FAILURE
        ),
        map((action) => new DisableLoadingAction())
    )
}