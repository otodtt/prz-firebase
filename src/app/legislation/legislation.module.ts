import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { MatTabsModule } from '@angular/material/tabs';

import { LegislationComponent } from './legislation.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MatTabsModule,
    RouterModule.forChild([{ path: '', component: LegislationComponent }]),
  ],
  declarations: [
    LegislationComponent
  ]
})
export class LegislationModule { }
