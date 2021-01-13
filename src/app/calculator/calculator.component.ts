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
  resultUnits: string;
  units: string[] = ['мл/дка', 'л/дка', 'г/дка', 'кг/дка', ' % '];
  areaUnits: string[] = ['кв.м', 'дка'];
  calculationResult: number;

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
    let calculationResult: number;
    // CALCULATION
    if (value.areaUnits === 0 ) {
      calculationResult = value.dose * value.area / 1000;
      this.calculationResult = calculationResult;
    } else {
      calculationResult = value.dose * value.area / 1;
      this.calculationResult = calculationResult;
    }
    // SET FULL UNITS
    // милилитър
    if ( calculationResult === 1 && value.units === 0) {
      this.resultUnits = 'милилитър';
    }
    if (calculationResult !== 1 && value.units === 0) {
      this.resultUnits = 'милилитра';
    }
    // Литър
    if ( calculationResult === 1 && value.units === 1) {
      this.resultUnits = 'литър';
    }
    if (this.calculationResult !== 1 && value.units === 1 ) {
      this.resultUnits = 'литра';
    }
    // Грам
    if ( calculationResult === 1 && value.units === 2) {
      this.resultUnits = 'грам';
    }
    if (this.calculationResult !== 1 && value.units === 2 ) {
      this.resultUnits = 'грама';
    }
    // Килограм
    if ( calculationResult === 1 && value.units === 3) {
      this.resultUnits = 'килограм';
    }
    if (this.calculationResult !== 1 && value.units === 3 ) {
      this.resultUnits = 'килограма';
    }
    // console.log(value.units, ' + ', calculationResult, ' + ', this.selectedUnit);
    // let doseResult: number;
    // let calculationResult: number;
    // if (value.units === 4) {
    //   doseResult = value.dose;
    // } else {
    //   doseResult = value.dose;
    // }


    // console.log(doseResult);
    // console.log(calculationResult);

    // const dialogRef = this.dialog.open(DialogCalculatorComponent, {
    //   minWidth: '280px', panelClass: 'dialog-pannel',
    //   data: { dose: value.dose, units: value.units, area: value.area, areaUnits: value.areaUnits, calc: calculationResult }
    // });

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
export class DialogCalculatorComponent implements OnInit {

  doseUnits: string;
  calcAreaUnits: string;

  constructor(
    public dialogRef: MatDialogRef<DialogCalculatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // if ( data.areaUnits === 0 ) {
    //   if ( data.area === 1) {
    //     this.calcAreaUnits = 'кв. метър';
    //   } else {
    //     this.calcAreaUnits = 'кв. метра';
    //   }
    //   // this.calcAreaUnits = 'кв.м';
    // }
    // if ( data.areaUnits === 1 ) {
    //   if ( data.area === 1) {
    //     this.calcAreaUnits = 'декар';
    //   } else {
    //     this.calcAreaUnits = 'декара';
    //   }
    // }

    // switch ( data.units ) {
    //   case 0:
    //     this.doseUnits = 'мл/дка';
    //     break;
    //   case 1:
    //     this.doseUnits = 'л/дка';
    //     break;
    //   case 2:
    //     this.doseUnits = 'г/дка';
    //     break;
    //   case 3:
    //     this.doseUnits = 'кг/дка';
    //     break;
    //   case 4:
    //     this.doseUnits = '%';
    //     break;
    //   default:
    //     this.doseUnits = '';
    //     break;
    // }
    // console.log(this.doseUnits);
  }

  ngOnInit(): void {
    // if(data.units === 0) {
    //   this.doseUnits = 'мл/дка';
    // }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
