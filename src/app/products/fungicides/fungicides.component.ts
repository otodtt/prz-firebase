import {Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

@Component({
  templateUrl: './fungicides.component.html',
  styleUrls: ['./fungicides.component.scss']
})
export class FungicidesComponent implements OnInit {

  private title = 'ПРЗ | Фунгициди';
  private description =   'Фунгициди. Продуки за растителна защита за борба срещу болести по културните растения';
  private keywords = 'фунгициди, продуки, растителна, защита, култури, растителнозащитни, пракатики';

  breadcrumbName = 'Фунгициди';
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
