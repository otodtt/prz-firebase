import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './pisum.component.html',
  styleUrls: ['../../pages.scss']
})
export class PisumComponent implements OnInit {
  private title = 'ПИВ - Грах';
  private description = 'Прагове на икономическа вредност за вредители по грах.';
  private keywords = 'ПИВ, грах, болести, неприятели, плевели, ПРЗ';

  breadcrumbName = 'Грах';

  constructor(
    private seoService: SeoService,
    private changeBreadcrumbService: ChangeBreadcrumbService,
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setMeta(this.description, this.keywords);
  }

  ngOnInit(): void{
    this.changeBreadcrumbService.emitName(this.breadcrumbName);
  }
}
