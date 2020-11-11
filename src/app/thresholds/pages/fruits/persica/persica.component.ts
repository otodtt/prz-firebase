import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './persica.component.html',
    styleUrls: ['../../pages.scss']
})
export class PersicaComponent implements OnInit {
    private title = 'ПИВ - Праскова';
    private description = 'Прагове на икономическа вредност за вредители по праскова.';
    private keywords = 'ПИВ, праскова, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Праскова';

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
