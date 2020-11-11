import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './daucus.component.html',
    styleUrls: ['../../pages.scss']
})
export class DaucusComponent implements OnInit {
    private title = 'ПИВ - Моркови';
    private description = 'Прагове на икономическа вредност за вредители по моркови.';
    private keywords = 'ПИВ, моркови, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Моркови';

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
