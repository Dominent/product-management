import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    templateUrl: 'confirmation.component.html',
    styleUrls: ['confirmation.component.scss']
})
export class ConfirmationDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ConfirmationDialogComponent>
    ) {
    }

    public confirmationHandler() {
        this.dialogRef.close(true);
    }

    public cancelationHandler() {
        this.dialogRef.close(false);
    }
}
