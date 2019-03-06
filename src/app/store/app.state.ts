import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export interface CategoryState {
    readonly all: Category[];
}

export interface ProductState {
    readonly all: Product[];
}

export interface AppState {
    readonly products: ProductState;
    readonly categories: CategoryState;
}
