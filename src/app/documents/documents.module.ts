import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { DocumentsComponent } from './documents.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{ path: '', component: DocumentsComponent }]),
    MatStepperModule,
    MatIconModule
  ],
  declarations: [
    DocumentsComponent
  ]
})
export class DocumentsModule { }
