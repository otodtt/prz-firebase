import {Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

@Component({
  templateUrl: './insecticides.component.html',
  styleUrls: ['./insecticides.component.scss'],
})
export class InsecticidesComponent implements OnInit   {
  private title = 'ПРЗ | Инсектициди';
  private description =   'Инсектициди. Продуки за растителна защита за борба срещу вредни насекоми по културните растения';
  private keywords = 'инсектициди, продуки, растителна, защита, култури, растителнозащитни, пракатики';

  breadcrumbName = 'Инсектициди';
  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService
  ) {
      this.seoService.addTitle(this.title);
      this.seoService.setMeta(this.description, this.keywords);
  }

  ngOnInit(): void {
      this.changeBreadcrumb.emitName(this.breadcrumbName);
  }
}
