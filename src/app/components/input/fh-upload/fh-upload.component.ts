import { Component, Input, Output, EventEmitter } from '@angular/core';

type Upload = {
    name: string;
    value: string;
};

@Component({
    selector: 'fh-upload',
    templateUrl: 'fh-upload.component.html',
    styleUrls: ['fh-upload.component.scss']
})
export class FhUploadComponent {
    @Input() public Name: string;
    @Input() public Label: string;
    @Input() public Limit: number;
    @Input() public ShowName: boolean = true;

    @Output() public Change: EventEmitter<Upload>;

    public uploads: Upload[];

    constructor() {
        this.Change = new EventEmitter<Upload>();
        this.uploads = [];
    }

    onFileChange(event) {
        const files = event.target.files;
        const reader = new FileReader();

        for (const file of files) {
            reader.onload = () => {
                if (this.Limit !== undefined) {
                    this.uploads = this.uploads.slice(0, (+this.Limit) - 1);
                }

                this.uploads.push({
                    name: file.name,
                    value: reader.result as string
                });

                this.Change.emit({ name: file.name, value: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    }
}
