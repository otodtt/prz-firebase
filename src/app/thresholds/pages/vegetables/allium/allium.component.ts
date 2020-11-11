import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './allium.component.html',
    styleUrls: ['../../pages.scss']
})
export class AlliumComponent implements OnInit {
    private title = 'ПИВ - Лук и Чесън';
    private description = 'Прагове на икономическа вредност за вредители по лук и чесън.';
    private keywords = 'ПИВ, лук, чесън, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Лук и Чесън';

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
