import { ProductState } from '../app.state';
import { ProductActions, ProductActionTypes } from '../actions/product.actions';

const initialState: ProductState = {
    all: [
        { description: 'category description 1', name: 'test1', category: null, creationDate: new Date() },
        { description: 'category description 2', name: 'test2', category: null, creationDate: new Date() },
        { description: 'category description 3', name: 'test3', category: null, creationDate: new Date() },
        { description: 'category description 4', name: 'test4', category: null, creationDate: new Date() },
        { description: 'category description 5', name: 'test5', category: null, creationDate: new Date() },
    ]
};

export function productReducer(state = initialState, action: ProductActions) {
    switch (action.type) {
        case ProductActionTypes.CREATE_PRODUCT:
            return { ...state, all: [...state.all, action.payload] };
        case ProductActionTypes.DELETE_PRODUCT:
            return { ...state, all: state.all.filter(c => JSON.stringify(c) !== JSON.stringify(action.payload)) };
        case ProductActionTypes.EDIT_PRODUCT:
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
