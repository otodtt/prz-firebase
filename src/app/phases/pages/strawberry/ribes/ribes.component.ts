import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './ribes.component.html',
    styleUrls: ['./ribes.component.scss', '../../pages.scss']
})
export class RibesComponent implements OnInit {

    private title = 'BBCH - Касис';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация ' +
                            'при черно френско грозде и червено френско грозде' ;
    breadcrumbName = 'Касис';

    constructor(
        private seoService: SeoService,
        private changeBreadcrumb: ChangeBreadcrumbService,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setNoKeywordsMeta(this.description);
    }

    ngOnInit(): void {
        this.changeBreadcrumb.emitName(this.breadcrumbName);
    }
}
