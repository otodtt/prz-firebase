import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

@Component({
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  headerId = 'aa-site';
  // breadcrumbTitle = 'SITEMAP';
  // breadcrumbName = 'Карта на сайта';

  private title = 'ПРЗ | Условия за ползване на сайта';
  private description = 'Условия за ползване на сайта. Продукти за растителна защита. ПРЗ';

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setNoKeywordsMeta(this.description);
  }

  ngOnInit(): void {
    // this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    // this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.changeBreadcrumb.emitId(this.headerId);
  }

}
