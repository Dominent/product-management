import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/models/product.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { EditProductAction } from 'src/app/store/actions/product.actions';

@Component({
    templateUrl: 'edit-product.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProductDialogComponent {
    public formData: FormGroup;
    private product: Product;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Product,
        public dialogRef: MatDialogRef<EditProductDialogComponent>,
        private store: Store<AppState>
    ) {
        this.product = data;
        this.formData = new FormGroup({
            name: new FormControl(this.product.name),
            description: new FormControl(this.product.description),
            category: new FormControl(this.product.category),
            creationDate: new FormControl(this.product.creationDate)
        });
    }

    public get categories(): Observable<Category[]> {
        return this.store.select(x => x.categories.all);
    }

    public submitHandler(product: Product) {
        this.store.dispatch(new EditProductAction({
            old: this.product,
            new: product
        }));
        this.dialogRef.close();
    }

    public cancelHandler() {
        this.dialogRef.close();
    }
}
