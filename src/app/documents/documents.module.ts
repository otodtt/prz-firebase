import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { DocumentsComponent } from './documents.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{ path: '', component: DocumentsComponent }]),
  ],
  declarations: [
    DocumentsComponent
  ]
})
export class DocumentsModule { }
