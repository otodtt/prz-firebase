import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { MatTabsModule } from '@angular/material/tabs';

import { FormulationsComponent } from './formulations.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MatTabsModule,
    RouterModule.forChild([{ path: '', component: FormulationsComponent }]),
  ],
  declarations: [
    FormulationsComponent
  ]
})
export class FormulationsModule { }
