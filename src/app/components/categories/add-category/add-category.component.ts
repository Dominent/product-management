import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { CreateCategoryAction } from 'src/app/store/actions/category.actions';

@Component({
    templateUrl: 'add-category.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCategoryDialogComponent {
    public formData: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
        private store: Store<AppState>
    ) {
        this.formData = new FormGroup({
            name: new FormControl(),
            description: new FormControl()
        });
    }

    public submitHandler(category: Category) {
        this.store.dispatch(new CreateCategoryAction(category));
        this.dialogRef.close();
    }

    public cancelHandler() {
        this.dialogRef.close();
    }
}
