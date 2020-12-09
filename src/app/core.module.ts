import { NgModule } from '@angular/core';

import { ChangeBreadcrumbService } from './common/services/changeBreadcrumb.service';
import { ResizeService } from './common/services/ResizeService';
import { SeoService } from './common/services/SeoService';
import { CustomPreloadingStrategy } from './custom-preloading.service';


@NgModule({
  providers: [
    ChangeBreadcrumbService,
    ResizeService,
    SeoService,
    CustomPreloadingStrategy
  ]
})
export class CoreModule {}
