import { CategoryState } from '../app.state';
import { CategoryActions, CategoryActionTypes } from '../actions/category.actions';

const initialState: CategoryState = {
    all: [
        { description: 'category description 1', name: 'test1' },
        { description: 'category description 2', name: 'test2' },
        { description: 'category description 3', name: 'test3' },
        { description: 'category description 4', name: 'test4' },
        { description: 'category description 5', name: 'test5' }
    ]
};

export function categoryReducer(state = initialState, action: CategoryActions) {
    switch (action.type) {
        case CategoryActionTypes.CREATE_GATEGORY:
            return { ...state, all: [...state.all, action.payload] };
        case CategoryActionTypes.DELETE_CATEGORY:
            return { ...state, all: state.all.filter(c => JSON.stringify(c) !== JSON.stringify(action.payload)) };
        case CategoryActionTypes.EDIT_CATEGORY:
            const index = state.all
                .findIndex(c => JSON.stringify(c) === JSON.stringify(action.payload.old));

            if (index !== -1) {
                const all = [...state.all];
                all[index] = action.payload.new;
                return { ...state, all };
            } else {
                return state;
            }
        default:
            return state;
    }
}
