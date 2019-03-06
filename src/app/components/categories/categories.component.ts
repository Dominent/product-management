import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { MatDialog } from '@angular/material';
import { AddCategoryDialogComponent } from './add-category/add-category.component';
import { EditCategoryDialogComponent } from './edit-category/edit-category.component';
import { ConfirmationDialogComponent } from '../shared/confirmation/confirmation.component';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeleteCategoryAction } from 'src/app/store/actions/category.actions';

@Component({
    selector: 'app-categories',
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
    public displayedColumns: string[] = ['name', 'description', 'edit', 'delete'];

    constructor(
        public dialog: MatDialog,
        private store: Store<AppState>
    ) { }

    public get dataSource(): Observable<Category[]> {
        return this.store.select(x => x.categories.all);
    }

    public createCategoryHandler() {
        const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
            width: '500px'
        });
    }

    public deleteHandler(category: Category) {
        this.dialog.open(ConfirmationDialogComponent, { width: '500px' })
            .afterClosed()
            .subscribe(res => res && this.store.dispatch(new DeleteCategoryAction(category)));
    }

    public editCategoryHandler(category: Category) {
        const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
            width: '500px',
            data: category
        });
    }
}
