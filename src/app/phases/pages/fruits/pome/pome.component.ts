import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './pome.component.html',
    styleUrls: ['./pome.component.scss', '../../pages.scss']
})
export class PomeComponent implements OnInit {

    private title = 'BBCH - Ябълка и круша';
    private description = 'Фенологични фази на растеж и ключове за тяхната идентификация при семковите овощни видове: ябълка и круша' ;
    breadcrumbName = 'Ябълка и круша';

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
