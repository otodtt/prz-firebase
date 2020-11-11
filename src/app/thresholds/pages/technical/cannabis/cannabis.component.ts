import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './cannabis.component.html',
    styleUrls: ['../../pages.scss']
})
export class CannabisComponent implements OnInit {
    private title = 'ПИВ - Коноп и Лен';
    private description = 'Прагове на икономическа вредност за вредители по коноп и лен.';
    private keywords = 'ПИВ, коноп, лен, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Коноп и Лен';

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
