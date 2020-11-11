import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    templateUrl: './more-dialog.component.html',
    styleUrls: ['./more-dialog.component.scss']
})
export class MoreDialogComponent  {

    constructor(
        public dialogRef: MatDialogRef<MoreDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
