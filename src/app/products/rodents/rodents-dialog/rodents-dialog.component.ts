import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    templateUrl: './rodents-dialog.component.html',
    styleUrls: ['./rodents-dialog.component.scss']
})
export class RodentsDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<RodentsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
