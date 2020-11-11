import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './phaseolus.component.html',
    styleUrls: ['./phaseolus.component.scss', '../../pages.scss']
})
export class PhaseolusComponent implements OnInit {

    private title = 'BBCH - Фасул';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при фасул.';
    breadcrumbName = 'Фасул';

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
