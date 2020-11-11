import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './grains.component.html',
    styleUrls: ['./grains.component.scss', '../../pages.scss']
})
export class GrainsComponent implements OnInit {

    private title = 'BBCH - Житни';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация ' +
                        'при житните култури със слята повърхност пшеница, ечемик, овес и ръж.';
    breadcrumbName = 'Житни';

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
