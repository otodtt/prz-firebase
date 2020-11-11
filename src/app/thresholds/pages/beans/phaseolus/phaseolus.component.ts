import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './phaseolus.component.html',
  styleUrls: ['../../pages.scss']
})
export class PhaseolusComponent implements OnInit {
  private title = 'ПИВ - Фасул';
  private description = 'Прагове на икономическа вредност за вредители по фасул.';
  private keywords = 'ПИВ, фасул, болести, неприятели, плевели, ПРЗ';

  breadcrumbName = 'Фасул';

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
