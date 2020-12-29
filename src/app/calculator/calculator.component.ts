import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

@Component({
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  headerId = 'aa-documents';
  breadcrumbTitle = 'КАЛКУЛАТОР';
  breadcrumbName = 'Калкулатор';

  private title = 'ПРЗ | Калкулатор';
  private description = 'Калкулатор за изчисляване на необходимото количество от Продукт за Растителна Защита за единица площ.';

  selectedUnit: number;
  dose: number;
  units: string[] = ['мл/дка', 'л/дка', 'мг/дка', 'кг/дка', ' % '];

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setNoKeywordsMeta(this.description);
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.changeBreadcrumb.emitId(this.headerId);
  }
}
