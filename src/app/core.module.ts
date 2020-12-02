import { NgModule } from '@angular/core';

import { ChangeBreadcrumbService } from './common/services/changeBreadcrumb.service';
import { ResizeService } from './common/services/ResizeService';
import { SeoService } from './common/services/SeoService';
import { AngularFireDatabase } from '@angular/fire/database';


@NgModule({
  providers: [
    ChangeBreadcrumbService,
    ResizeService,
    SeoService,
    AngularFireDatabase,
  ]
})
export class CoreModule {}
