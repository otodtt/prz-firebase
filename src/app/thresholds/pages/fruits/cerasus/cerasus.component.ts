import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './cerasus.component.html',
    styleUrls: ['../../pages.scss']
})
export class CerasusComponent implements OnInit {
    private title = 'ПИВ - Череша и Вишня';
    private description = 'Прагове на икономическа вредност за вредители по череша и вишня.';
    private keywords = 'ПИВ, череша, вишня, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Череша и Вишня';

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
