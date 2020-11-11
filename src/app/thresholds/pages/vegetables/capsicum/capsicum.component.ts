import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './capsicum.component.html',
    styleUrls: ['../../pages.scss']
})
export class CapsicumComponent implements OnInit {
    private title = 'ПИВ - Пипер';
    private description = 'Прагове на икономическа вредност за вредители по пипер.';
    private keywords = 'ПИВ, пипер, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Пипер';

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
