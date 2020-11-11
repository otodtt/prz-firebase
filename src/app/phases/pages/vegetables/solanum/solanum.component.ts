import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './solanum.component.html',
    styleUrls: ['./solanum.component.scss', '../../pages.scss']
})
export class SolanumComponent implements OnInit {

    private title = 'BBCH - Картофи';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при картофи.';
    breadcrumbName = 'Картофи';

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
