import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';

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



  // validationMessages: any = {
  //   dose: [
  //     { type: 'required', message: 'Името е задължително!' },
  //     // { type: 'minlength', message: 'Минимална дължина за име - 2 знака.' }
  //   ],
  //   // subject: [
  //   //   { type: 'required', message: 'Полето е задължително' },
  //   //   { type: 'minlength', message: 'Минимална дължина за тема - 3 знака.' }
  //   // ],
  //   // text: [
  //   //   { type: 'required', message: 'Моля, напишете Вашето съобщение!' },
  //   // ],
  //   // email: [
  //   //   { type: 'required', message: 'Трябва да въведете валиден адрес!' },
  //   //   { type: 'email', message: '' },
  //   //   { type: 'pattern', message: 'Невалиден email' }
  //   // ]
  // };
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

  // convenience getter for easy access to form fields
  // get f(): any {
  //   console.log(this.calculatorForm.controls);
  //   return this.calculatorForm.controls;
  // }

  // this.calculatorForm = new FormGroup({
  //   dose: new FormControl()
  // });

  createForm(): void {

    this.calculatorForm = this.fb.group({
      dose: ['', [Validators.required, Validators.min(0.01), Validators.max(999999) ]],
      units: ['', Validators.required ],
      area: ['', [Validators.required, Validators.min(0.01), Validators.max(9999999) ]],
      areaUnits: ['', Validators.required]
    });
  }

  onSubmit( value: any ): void {
    console.log(value);
  }

  onReset(): void {
    // this.submitted = false;
    this.calculatorForm.reset();
  }
}
