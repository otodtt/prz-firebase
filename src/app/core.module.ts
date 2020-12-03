import { NgModule } from '@angular/core';

import { ChangeBreadcrumbService } from './common/services/changeBreadcrumb.service';
import { ResizeService } from './common/services/ResizeService';
import { SeoService } from './common/services/SeoService';
import { AngularFireDatabase } from '@angular/fire/database';
import { CustomPreloadingStrategy } from './custom-preloading.service';


@NgModule({
  providers: [
    ChangeBreadcrumbService,
    ResizeService,
    SeoService,
    AngularFireDatabase,
    CustomPreloadingStrategy
  ]
})
export class CoreModule {}
