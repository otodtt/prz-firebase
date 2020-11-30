import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegislationRoutingModul } from './legislation-routin.module';

import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

import { LegislationComponent } from './legislation.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    LegislationRoutingModul
  ],
  declarations: [
    LegislationComponent
  ]
})
export class LegislationModule { }
