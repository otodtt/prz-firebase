import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './beta.component.html',
    styleUrls: ['../../pages.scss']
})
export class BetaComponent implements OnInit {
    private title = 'ПИВ - Захарно цвекло';
    private description = 'Прагове на икономическа вредност за вредители по захарно цвекло.';
    private keywords = 'ПИВ, захарно цвекло, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Цвекло';

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
