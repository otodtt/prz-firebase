import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './mentha.component.html',
  styleUrls: ['../../pages.scss']
})
export class MenthaComponent implements OnInit {
  private title = 'ПИВ - Мента и Лавандула';
  private description = 'Прагове на икономическа вредност за вредители по мента и лавандула.';
  private keywords = 'ПИВ, мента, лавандула, болести, неприятели, плевели, ПРЗ';

  breadcrumbName = 'Мента и Лавандула';

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
