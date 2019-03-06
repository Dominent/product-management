import { Action } from '@ngrx/store';
import { Category } from 'src/app/models/category.model';

export enum CategoryActionTypes {
    CREATE_GATEGORY = 'CREATE_GATEGORY',
    EDIT_CATEGORY = 'EDIT_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY'
}

export class CreateCategoryAction implements Action {
    public readonly type = CategoryActionTypes.CREATE_GATEGORY;

    constructor(public payload: Category) { }
}

export class DeleteCategoryAction implements Action {
    public readonly type = CategoryActionTypes.DELETE_CATEGORY;

    constructor(public payload: Category) { }
}

export class EditCategoryAction implements Action {
    public readonly type = CategoryActionTypes.EDIT_CATEGORY;

    constructor(public payload: { old: Category, new: Category }) { }
}

export type CategoryActions =
    CreateCategoryAction |
    EditCategoryAction |
    DeleteCategoryAction;
