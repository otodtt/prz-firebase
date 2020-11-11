import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './helianthus.component.html',
    styleUrls: ['./helianthus.component.scss', '../../pages.scss']
})
export class HelianthusComponent implements OnInit {

    private title = 'BBCH - Слънчоглед';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при слънчоглед.';
    breadcrumbName = 'Слънчоглед';

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
