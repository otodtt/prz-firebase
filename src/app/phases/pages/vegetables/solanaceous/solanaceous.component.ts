import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './solanaceous.component.html',
    styleUrls: ['./solanaceous.component.scss', '../../pages.scss']
})
export class SolanaceousComponent implements OnInit {

    private title = 'BBCH - Домати, патладжан, пипер';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация' +
                            'при домати, патладжан, пипер.';
    breadcrumbName = 'Домати, патладжан, пипер';

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
