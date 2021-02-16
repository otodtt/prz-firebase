import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

@Component({
  templateUrl: './firms.component.html',
  styleUrls: ['./firms.component.scss']
})
export class FirmsComponent implements OnInit {
  private title = 'ПРЗ | Фирми';
  private description = 'Фирми приежаващи разрешително за Продуки за растителна защита' ;
  private keywords = 'фирми, продуки, растителна, защита, култури, растителнозащитни, пракатики';
  breadcrumbName = 'Фирми';

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
