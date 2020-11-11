import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';

@Component({
  selector: 'prz-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
    private title = 'Правила и Принципи на ДРЗП';
    private description = 'Правила и Принципи за Добри Растителнозащитни Пракатики в земеделието.';
    private keywords = 'култура, култури, растителнозащитни, пракатики, ДРЗП';
    breadcrumbName = 'Правила';

    constructor(
        private seoService: SeoService,
        private changeBreadcrumb: ChangeBreadcrumbService,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit(): void  {
        this.changeBreadcrumb.emitName(this.breadcrumbName);
    }
}
