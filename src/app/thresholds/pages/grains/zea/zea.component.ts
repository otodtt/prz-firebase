import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './zea.component.html',
  styleUrls: ['../../pages.scss']
})
export class ZeaComponent implements OnInit {
    private title = 'ПИВ - Царевица';
    private description = 'Прагове на икономическа вредност за вредители по царевица.';
    private keywords = 'ПИВ, царевица, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Царевица';

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
