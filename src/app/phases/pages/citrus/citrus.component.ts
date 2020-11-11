import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';

@Component({
    templateUrl: './citrus.component.html',
    styleUrls: ['./citrus.component.scss', '../pages.scss']
})
export class CitrusComponent implements OnInit {

    private title = 'BBCH - Цитруси';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при цитрусовите култури' ;
    breadcrumbName = 'Цитруси';

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
