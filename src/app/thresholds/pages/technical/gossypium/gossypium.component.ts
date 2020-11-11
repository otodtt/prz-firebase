import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './gossypium.component.html',
    styleUrls: ['../../pages.scss']
})
export class GossypiumComponent implements OnInit {
    private title = 'ПИВ - Памук';
    private description = 'Прагове на икономическа вредност за вредители по памук.';
    private keywords = 'ПИВ, памук, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Памук';

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
