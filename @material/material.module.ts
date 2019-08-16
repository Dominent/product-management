import { NgModule } from '@angular/core';
import {
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCardModule,
    MatCheckboxModule,
    MatStepperModule
} from '@angular/material';

@NgModule({
    exports: [
        MatListModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatCardModule,
        MatCheckboxModule,
        MatStepperModule
    ]
})
export class MaterialModule {}
