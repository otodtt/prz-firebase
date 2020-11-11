import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

@Component({
    selector: 'prz-crops',
    templateUrl: './crops.component.html',
    styleUrls: ['./crops.component.scss']
})
export class CropsComponent implements OnInit {
    private title = 'ПРЗ | Култури';
    private description = 'Продуки за растителна защита по култури' ;
    private keywords = 'продуки, растителна, защита, култури, растителнозащитни, пракатики';
    headerId = 'aa-crops';
    breadcrumbTitle = 'КУЛТУРИ';
    breadcrumbName = 'Култури';

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private seoService: SeoService
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit(): void {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
        this.changeBreadcrumb.emitId(this.headerId);
    }

}
