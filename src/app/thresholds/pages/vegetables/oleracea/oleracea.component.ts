import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './oleracea.component.html',
    styleUrls: ['../../pages.scss']
})
export class OleraceaComponent implements OnInit {
    private title = 'ПИВ - Зеле';
    private description = 'Прагове на икономическа вредност за вредители по зеле.';
    private keywords = 'ПИВ, зеле, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Зеле';

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
