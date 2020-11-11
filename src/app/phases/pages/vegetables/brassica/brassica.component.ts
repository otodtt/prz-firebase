import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './brassica.component.html',
    styleUrls: ['./brassica.component.scss', '../../pages.scss']
})
export class BrassicaComponent implements OnInit {

    private title = 'BBCH - Зелеви култури';
    private description = 'Фенологични  фази на растеж и ВВСН-ключове за тяхната идентификация при ' +
                            'листните зеленчуци формиращи глави: зеле, китайско зеле, салата и цихория ';
    breadcrumbName = 'Зелеви култури';

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
