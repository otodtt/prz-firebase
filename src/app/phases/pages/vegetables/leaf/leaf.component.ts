import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './leaf.component.html',
    styleUrls: ['./leaf.component.scss', '../../pages.scss']
})
export class LeafComponent implements OnInit {

    private title = 'BBCH - Листни зеленчуци';
    private description = 'Фенологични  фази на растеж и ВВСН-ключове за тяхната идентификация ' +
                            'при листни зеленчуци неформиращи глави: спанак, безглавеста салата  и  зеле-кале';
    breadcrumbName = 'Листни зеленчуци';

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
