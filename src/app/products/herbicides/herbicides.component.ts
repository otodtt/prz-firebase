import {Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

@Component({
  templateUrl: './herbicides.component.html',
  styleUrls: ['./herbicides.component.scss']
})
export class HerbicidesComponent implements OnInit {

  private title = 'ПРЗ | Хербициди';
  private description =   'Хербициди. Продуки за растителна защита за борба срещу нежелана растителност по културните растения';
  private keywords = 'хербициди, продуки, растителна, защита, култури, растителнозащитни, пракатики';

  breadcrumbName = 'Хербициди';
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
