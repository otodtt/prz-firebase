import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './beta.component.html',
    styleUrls: ['./beta.component.scss', '../../pages.scss']
})
export class BetaComponent implements OnInit {

    private title = 'BBCH - Цвекло';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при цвекло.';
    breadcrumbName = 'Цвекло';

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
