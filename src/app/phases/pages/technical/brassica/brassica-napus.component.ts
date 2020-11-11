import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './brassica-napus.component.html',
    styleUrls: ['./brassica-napus.component.scss', '../../pages.scss']
})
export class BrassicaNapusComponent implements OnInit {

    private title = 'BBCH - Рапица';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при рапица.';
    breadcrumbName = 'Рапица';

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
