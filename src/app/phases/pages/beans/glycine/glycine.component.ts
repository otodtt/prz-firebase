import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './glycine.component.html',
    styleUrls: ['./glycine.component.scss', '../../pages.scss']
})
export class GlycineComponent implements OnInit {

    private title = 'BBCH - Соя';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при соя.';
    breadcrumbName = 'Соя';

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
