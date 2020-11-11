import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'prz-dialog-contacts',
  templateUrl: './dialog-contacts.component.html',
  styleUrls: ['./dialog-contacts.component.scss']
})
export class DialogContactsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
      this.dialogRef.close();
  }

}
