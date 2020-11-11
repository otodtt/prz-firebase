import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './zea.component.html',
    styleUrls: ['./zea.component.scss', '../../pages.scss']
})
export class ZeaComponent implements OnInit {

    private title = 'BBCH - Царевица';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при царевица.';
    breadcrumbName = 'Царевица';

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
