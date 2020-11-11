import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';

@Component({
  templateUrl: './vitis.component.html',
  styleUrls: ['./vitis.component.scss', '../pages.scss']
})
export class VitisComponent implements OnInit {

    private title = 'BBCH - Лоза';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при лоза' ;
    breadcrumbName = 'Лоза';

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
