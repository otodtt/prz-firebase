import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './melongena.component.html',
    styleUrls: ['../../pages.scss']
})
export class MelongenaComponent implements OnInit {
    private title = 'ПИВ - Патладжан';
    private description = 'Прагове на икономическа вредност за вредители по патладжан.';
    private keywords = 'ПИВ, патладжан, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Патладжан';

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
