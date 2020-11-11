import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';

@Component({
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.scss', '../pages.scss']
})
export class IntroductionComponent implements OnInit {

    private title = 'Въведение в BBCH';
    private description = 'Системата BBCH за кодиране на фенологичните етапи на растеж на растенията. ' +
                        'Въведение в BBCH скалта. Фенофази на развитие. BBCH кодове за всички култури.';
    breadcrumbName = 'Въведение';

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
