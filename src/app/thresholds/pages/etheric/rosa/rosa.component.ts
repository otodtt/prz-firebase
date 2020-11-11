import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './rosa.component.html',
  styleUrls: ['../../pages.scss']
})
export class RosaComponent implements OnInit {
  private title = 'ПИВ - Казанлъшка роза';
  private description = 'Прагове на икономическа вредност за вредители по казанлъшка роза.';
  private keywords = 'ПИВ, роза, болести, неприятели, плевели, ПРЗ';

  breadcrumbName = 'Роза';

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
