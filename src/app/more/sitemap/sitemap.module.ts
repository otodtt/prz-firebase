import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../../common/share.components.module';

import { SitemapComponent } from './sitemap.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{ path: '', component: SitemapComponent }]),
  ],
  declarations: [ SitemapComponent ]
})
export class SitemapModule { }
