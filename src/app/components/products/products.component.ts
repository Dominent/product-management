import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MatDialog } from '@angular/material';
import { AddProductDialogComponent } from './add-product/add-product.component';
import { EditProductDialogComponent } from './edit-product/edit-product.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ConfirmationDialogComponent } from '../shared/confirmation/confirmation.component';
import { DeleteProductAction } from 'src/app/store/actions/product.actions';

@Component({
    selector: 'app-products',
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
    public displayedColumns: string[] = ['name', 'description', 'category', 'creationDate', 'edit', 'delete'];

    constructor(
        public dialog: MatDialog,
        public store: Store<AppState>
    ) { }

    public get dataSource(): Observable<Product[]> {
        return this.store.select(x => x.products.all);
    }

    public deleteHandler(product: Product) {
        this.dialog.open(ConfirmationDialogComponent, { width: '500px' })
            .afterClosed()
            .subscribe(res => res && this.store.dispatch(new DeleteProductAction(product)));
    }

    public createProductHandler() {
        const dialogRef = this.dialog.open(AddProductDialogComponent, {
            width: '500px'
        });
    }

    public editProductHandler(product: Product) {
        const dialogRef = this.dialog.open(EditProductDialogComponent, {
            width: '500px',
            data: product
        });
    }
}
