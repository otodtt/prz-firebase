import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './bulb.component.html',
    styleUrls: ['./bulb.component.scss', '../../pages.scss']
})
export class BulbComponent implements OnInit {

    private title = 'BBCH - Лук, праз, чесън и лук-шалот';
    private description = 'Фенологични  фази на растеж и ВВСН-ключове за тяхната идентификация ' +
                            'при културите: лук, праз, чесън и лук-шалот';
    breadcrumbName = 'Лукови култури';

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
