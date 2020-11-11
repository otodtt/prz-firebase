import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './medicago.component.html',
  styleUrls: ['../../pages.scss']
})
export class MedicagoComponent implements OnInit {
  private title = 'ПИВ - Люцерна';
  private description = 'Прагове на икономическа вредност за вредители по люцерна.';
  private keywords = 'ПИВ, люцерна, болести, неприятели, плевели, ПРЗ';

  breadcrumbName = 'Люцерна';

  constructor(
    private seoService: SeoService,
    private changeBreadcrumbService: ChangeBreadcrumbService,
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setMeta(this.description, this.keywords);
  }

  ngOnInit(): void {
    this.changeBreadcrumbService.emitName(this.breadcrumbName);
  }
}
