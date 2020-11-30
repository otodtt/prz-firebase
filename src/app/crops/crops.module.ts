import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropsRoutingModul } from './crops-routing.module';

import { ShareComponentsModule } from '../common/share.components.module';

import { CropsComponent } from './crops.component';

@NgModule({
    imports: [
        CommonModule,
        ShareComponentsModule,
        CropsRoutingModul
    ],
    declarations: [
      CropsComponent
    ]
})
export class CropsModule { }
