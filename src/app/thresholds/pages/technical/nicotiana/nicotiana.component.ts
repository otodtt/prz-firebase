import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './nicotiana.component.html',
    styleUrls: ['../../pages.scss']
})
export class NicotianaComponent implements OnInit {
    private title = 'ПИВ - Тютюн';
    private description = 'Прагове на икономическа вредност за вредители по тютюн.';
    private keywords = 'ПИВ, тютюн, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Тютюн';

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit(): void{
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
    }
}
