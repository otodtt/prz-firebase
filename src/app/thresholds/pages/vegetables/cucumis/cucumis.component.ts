import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './cucumis.component.html',
  styleUrls: ['../../pages.scss']
})
export class CucumisComponent implements OnInit {
    private title = 'ПИВ - Краставици';
    private description = 'Прагове на икономическа вредност за вредители по краставици.';
    private keywords = 'ПИВ, краставици, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Краставици';

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
