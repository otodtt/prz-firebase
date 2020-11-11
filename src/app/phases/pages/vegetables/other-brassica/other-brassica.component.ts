import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './other-brassica.component.html',
    styleUrls: ['../../pages.scss']
})
export class OtherBrassicaComponent implements OnInit {

    private title = 'BBCH - Карфиол, брюкселско зеле и броколи';
    private description = 'Фенологични  фази на растеж и ВВСН-ключове за тяхната идентификация ' +
                            'при други зелеви култури: брюкселско зеле, цветно зеле - карфиол и броколи';
    breadcrumbName = 'Други Зелеви';

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
