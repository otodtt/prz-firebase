import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ShareComponentsModule } from '../common/share.components.module';
import { DocumentsComponent } from './documents.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    RouterModule.forChild([{ path: '', component: DocumentsComponent }]),
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule
  ],
  declarations: [
    DocumentsComponent
  ]
})
export class DocumentsModule { }
