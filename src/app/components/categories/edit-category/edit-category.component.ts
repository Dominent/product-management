import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from 'src/app/models/category.model';
import { FormGroup, FormControl } from '@angular/forms';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { EditCategoryAction } from 'src/app/store/actions/category.actions';

@Component({
    templateUrl: 'edit-category.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCategoryDialogComponent {
    public formData: FormGroup;
    private category: Category;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Category,
        public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
        private store: Store<AppState>
    ) {
        this.category = data;
        this.formData = new FormGroup({
            name: new FormControl(this.category.name),
            description: new FormControl(this.category.description)
        });
    }

    public submitHandler(category: Category) {
        this.store.dispatch(new EditCategoryAction({
            old: this.category,
            new: category
        }));
        this.dialogRef.close();
    }

    public cancelHandler() {
        this.dialogRef.close();
    }
}
