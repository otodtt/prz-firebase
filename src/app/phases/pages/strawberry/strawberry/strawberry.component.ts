import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './strawberry.component.html',
    styleUrls: ['./strawberry.component.scss', '../../pages.scss']
})
export class StrawberryComponent implements OnInit {

    private title = 'BBCH - Ягода';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при ягодата' ;
    breadcrumbName = 'Ягода';

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
