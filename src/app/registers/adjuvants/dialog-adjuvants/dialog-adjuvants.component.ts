import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './dialog-adjuvants.component.html',
  styleUrls: ['./dialog-adjuvants.component.scss']
})
export class DialogAdjuvantsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAdjuvantsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
      this.dialogRef.close();
  }
}
