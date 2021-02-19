import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

@Component({
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  headerId = 'aa-site';

  private title = 'ПРЗ | Карта на сайта';
  private description = 'sitemap. Карта на сайта. Продукти за растителна защита. ПРЗ';

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setNoKeywordsMeta(this.description);
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitId(this.headerId);
  }

}
