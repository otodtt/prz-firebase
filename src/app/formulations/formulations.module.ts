import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { FormulationsRoutingModul } from './formulations-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';

import { MatTabsModule } from '@angular/material/tabs';

/**  Pages */
import { FormulationsComponent } from './formulations.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MatTabsModule,
    FormulationsRoutingModul
  ],
  declarations: [
    FormulationsComponent
  ]
})
export class FormulationsModule { }
