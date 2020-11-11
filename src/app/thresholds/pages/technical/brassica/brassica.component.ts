import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './brassica.component.html',
  styleUrls: ['../../pages.scss']
})
export class BrassicaComponent implements OnInit {
    private title = 'ПИВ - Рапица';
    private description = 'Прагове на икономическа вредност за вредители по рапица.';
    private keywords = 'ПИВ, рапица, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Рапица';

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
