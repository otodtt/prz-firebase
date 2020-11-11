import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './gossypium.component.html',
    styleUrls: ['./gossypium.component.scss', '../../pages.scss']
})
export class GossypiumComponent implements OnInit {

    private title = 'BBCH - Памук';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при памук.';
    breadcrumbName = 'Памук';

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
