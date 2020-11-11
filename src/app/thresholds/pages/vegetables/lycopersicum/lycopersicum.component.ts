import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './lycopersicum.component.html',
    styleUrls: ['../../pages.scss']
})
export class LycopersicumComponent implements OnInit {
    private title = 'ПИВ - Домати';
    private description = 'Прагове на икономическа вредност за вредители по домати.';
    private keywords = 'ПИВ, домати, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Домати';

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
