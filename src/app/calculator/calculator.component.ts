import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';


@Component({
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  // @ViewChild(FormGroupDirective, { static: true }) formGroupDirective: FormGroupDirective;

  headerId = 'aa-documents';
  breadcrumbTitle = 'КАЛКУЛАТОР';
  breadcrumbName = 'Калкулатор';

  private title = 'ПРЗ | Калкулатор';
  private description = 'Калкулатор за изчисляване на необходимото количество от Продукт за Растителна Защита за единица площ.';

  calculatorForm: FormGroup;
  submitted = false;

  selectedUnit: number;
  selectedAreaUnit: number;
  dose: number;
  area: number;
  units: string[] = ['мл/дка', 'л/дка', 'мг/дка', 'кг/дка', ' % '];
  areaUnits: string[] = ['кв.м', 'дка'];

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setNoKeywordsMeta(this.description);
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.changeBreadcrumb.emitId(this.headerId);

    this.createForm();
  }

  createForm(): void {

    this.calculatorForm = this.fb.group({
      dose: ['', [Validators.required, Validators.min(0.01), Validators.max(999999) ]],
      units: ['', Validators.required ],
      area: ['', [Validators.required, Validators.min(0.01), Validators.max(9999999) ]],
      areaUnits: ['', Validators.required]
    });
  }

  onSubmit( value: any ): void {
    console.log(value.units);
    // let doseResult: number;
    let calculationResult: number;
    // if (value.units === 4) {
    //   doseResult = value.dose;
    // } else {
    //   doseResult = value.dose;
    // }

    if (value.areaUnits === 0 ) {
      calculationResult = value.dose * value.area / 1000;
    } else {
      calculationResult = value.dose * value.area / 1;
    }
    // console.log(doseResult);
    console.log(calculationResult);

    const dialogRef = this.dialog.open(DialogCalculatorComponent, {
      width: '300px',
      data: { dose: value.dose, units: value.units, area: value.area, areaUnits: value.areaUnits }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.calculatorForm.reset();
    // });
  }

  onReset(): void {
    // this.submitted = false;
    this.calculatorForm.reset();
  }
}

@Component({
  templateUrl: './dialog-calculator.component.html',
  styleUrls: ['./dialog-calculator.component.scss']
})
export class DialogCalculatorComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCalculatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
