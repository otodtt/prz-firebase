import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './solanum.component.html',
    styleUrls: ['../../pages.scss']
})
export class SolanumComponent implements OnInit {
    private title = 'ПИВ - Картофи';
    private description = 'Прагове на икономическа вредност за вредители по картофи.';
    private keywords = 'ПИВ, картофи, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Картофи';

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
