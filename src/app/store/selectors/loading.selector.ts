import { AppState } from "../app.state";
import { createSelector } from '@ngrx/store';

const loadingState = (state: AppState) => state.loading;

export const selectLoading = createSelector(
    loadingState,
    (state: boolean) => state
)

