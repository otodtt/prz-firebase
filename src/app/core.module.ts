import { NgModule } from '@angular/core';

import { ChangeBreadcrumbService } from './common/services/changeBreadcrumb.service';
import { SeoService } from './common/services/SeoService';
import { CustomPreloadingStrategy } from './custom-preloading.service';


@NgModule({
  providers: [
    ChangeBreadcrumbService,
    SeoService,
    CustomPreloadingStrategy,
  ]
})
export class CoreModule {}
