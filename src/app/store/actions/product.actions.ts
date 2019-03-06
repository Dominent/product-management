import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export enum ProductActionTypes {
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    EDIT_PRODUCT = 'EDIT_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT'
}

export class CreateProductAction implements Action {
    public readonly type = ProductActionTypes.CREATE_PRODUCT;

    constructor(public payload: Product) { }
}

export class DeleteProductAction implements Action {
    public readonly type = ProductActionTypes.DELETE_PRODUCT;

    constructor(public payload: Product) { }
}

export class EditProductAction implements Action {
    public readonly type = ProductActionTypes.EDIT_PRODUCT;

    constructor(public payload: { old: Product, new: Product }) { }
}

export type ProductActions =
    CreateProductAction |
    EditProductAction |
    DeleteProductAction;
