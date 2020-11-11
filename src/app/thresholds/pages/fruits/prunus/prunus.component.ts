import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './prunus.component.html',
    styleUrls: ['../../pages.scss']
})
export class PrunusComponent implements OnInit {
    private title = 'ПИВ - Слива';
    private description = 'Прагове на икономическа вредност за вредители по слива.';
    private keywords = 'ПИВ, слива, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Слива';

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
