import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';

@Component({
    templateUrl: './weed.component.html',
    styleUrls: ['./weed.component.scss', '../pages.scss']
})
export class WeedComponent implements OnInit {

    private title = 'BBCH - Плевели';
    private description = 'Фенологични фази на растеж и BBCH- ключове за тяхната идентификация при плевелни видове';
    breadcrumbName = 'Плевели';

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
