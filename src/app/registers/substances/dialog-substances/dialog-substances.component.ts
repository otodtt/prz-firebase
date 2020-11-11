import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './dialog-substances.component.html',
  styleUrls: ['./dialog-substances.component.scss']
})
export class DialogSubstancesComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogSubstancesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickNavigate(): void {
    this.dialogRef.close();

    this.dialogRef.afterClosed().subscribe(result => {
      window.scrollTo(0, 0);
    });
  }
}
