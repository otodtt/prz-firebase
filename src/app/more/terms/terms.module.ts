import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../../common/share.components.module';

import { TermsComponent } from './terms.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{
        path: '', component: TermsComponent
    }]),
  ],
  declarations: [TermsComponent],
})
export class TermsModule { }
