import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

import { LegislationComponent } from './legislation.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: LegislationComponent }]),
  ],
  declarations: [
    LegislationComponent
  ]
})
export class LegislationModule { }
