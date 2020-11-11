import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './stone.component.html',
    styleUrls: ['./stone.component.scss', '../../pages.scss']
})
export class StoneComponent implements OnInit {

    private title = 'BBCH - Костилкови овощни видове';
    private description = 'Фенологични фази на растеж и ВВСН-ключове за тяхната идентификация ' +
                            'при костилкови овощни видове: череша, слива, праскова и кайсия';
    breadcrumbName = 'Костилкови';

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
