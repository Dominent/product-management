import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fh-button',
    template: `
        <button mat-raised-button (click)="handleClick($event)" [color]="Color" type="button">
            <mat-icon *ngIf="!!Icon">{{Icon}}</mat-icon>
            <span [class.fh-button__text]="!!Icon">{{Text}}</span>
        </button>
    `,
    styles: [
        `
            .fh-button__text {
                position: relative;
                top: 1px;
            }
        `
    ]
})
export class FhButtonComponent {
    @Input() public Icon: string;
    @Input() public Text: string;
    @Input() public Color: string;
    @Output() public Click: EventEmitter<any>;

    constructor() {
        this.Click = new EventEmitter<any>();
    }

    public handleClick(ev) {
        this.Click.emit(ev);
    }
}
