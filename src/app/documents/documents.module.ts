import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { DocumentsRoutingModul } from './documents-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';

/**  Pages */
import { DocumentsComponent } from './documents.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    DocumentsRoutingModul
  ],
  declarations: [
    DocumentsComponent
  ]
})
export class DocumentsModule { }
