import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './vicia.component.html',
    styleUrls: ['./vicia.component.scss', '../../pages.scss']
})
export class ViciaComponent implements OnInit {

    private title = 'BBCH - Бакла';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при бакла.';
    breadcrumbName = 'Бакла';

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
