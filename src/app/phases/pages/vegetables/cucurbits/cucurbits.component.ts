import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './cucurbits.component.html',
    styleUrls: ['./cucurbits.component.scss', '../../pages.scss']
})
export class CucurbitsComponent implements OnInit {

    private title = 'BBCH - краставица, диня, пъпеш';
    private description = 'Фенологични фази на растеж и BBCH-ключове за (тяхната) индефикация ' +
                            'при краставица, пъпеш, тиква, тиквичка, кратуна и диня';
    breadcrumbName = 'Тиквови култури';

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
