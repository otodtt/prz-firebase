import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss', '../../pages.scss']
})
export class RootComponent implements OnInit {

    private title = 'BBCH - Морков, целина, алабаш и други';
    private description = 'Фенологични фази на растеж и ВВСН-ключове за тяхната идентификация ' +
                            'при коренови и стъблени зеленчуци: морков, целина, алабаш, ' +
                            'цихория, ряпа, шведско цвекло-swede и scorzonera';
    breadcrumbName = 'Коренови и стъблени';

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
