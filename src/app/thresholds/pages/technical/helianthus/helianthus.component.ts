import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './helianthus.component.html',
    styleUrls: ['../../pages.scss']
})
export class HelianthusComponent implements OnInit {
    private title = 'ПИВ - Слънчоглед';
    private description = 'Прагове на икономическа вредност за вредители по слънчоглед.';
    private keywords = 'ПИВ, слънчоглед, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Слънчоглед';

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
