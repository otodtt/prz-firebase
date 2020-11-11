import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
      templateUrl: './pisum.component.html',
      styleUrls: ['./pisum.component.scss', '../../pages.scss']
})
export class PisumComponent implements OnInit {

    private title = 'BBCH - Грах';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при грах.';
    breadcrumbName = 'Грах';

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
