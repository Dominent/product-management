import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { CreateProductAction } from 'src/app/store/actions/product.actions';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Component({
    templateUrl: 'add-product.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductDialogComponent {
    public formData: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddProductDialogComponent>,
        private store: Store<AppState>
    ) {
        this.formData = new FormGroup({
            name: new FormControl(),
            description: new FormControl(),
            category: new FormControl(),
            creationDate: new FormControl(new Date())
        });
    }

    public get categories(): Observable<Category[]> {
        return this.store.select(x => x.categories.all);
    }

    public submitHandler(product: Product) {
        this.store.dispatch(new CreateProductAction(product));
        this.dialogRef.close();
    }

    public cancelHandler() {
        this.dialogRef.close();
    }
}
