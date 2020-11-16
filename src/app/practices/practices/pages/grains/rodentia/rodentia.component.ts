import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './rodentia.component.html',
    styleUrls: ['../../pages.scss', '../../media.scss']
})
export class RodentiaComponent implements OnInit {
    private title = 'ДРЗП - Гризачи';
    private description = 'Добра Растителнозащитна Пракатика при борба с гризачи.';
    private keywords = 'гризач, гризачи, мишка, мишки, полевка, полевки, ПРЗ, ПИВ';

    breadcrumbName = 'Гризачи';

    isLoaded = false;
    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }
    ngOnInit(): void {
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
        this.isLoaded = false;
        setTimeout(() => {
            this.isLoaded = true;
        }, 200);
    }
}
