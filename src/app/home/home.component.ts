import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

@Component({
    selector: 'prz-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private title = 'ПРЗ | Продуки за растителна защита. Добри Растителнозащитни Пракатики. Интегрирано Управление на Вредители и ПИВ.';
    private description =   'Продуки за растителна защита (инсектици, фунгициди, хербициди, ' +
                            'акарициди и други). Продуки за растителна защита по култури, ' +
                            'Добри растителнозащитни пракатики в земеделието. ' +
                            'Интегрирано управление на вредители. Прагове на Икономическа Вредност.';
    private keywords = 'продуки, растителна, защита, култури, растителнозащитни, пракатики';
    breadcrumbTitle = 'НАЧАЛО';
    breadcrumbName = 'Начало';

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private seoService: SeoService
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit(): void {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
    }

}
