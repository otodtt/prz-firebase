import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { getBulgarianPaginatorIntl } from '../products/shared/services/CustomPaginator';

import { RegistersRoutingModule } from './registers-routing.module';

/** Services */

import { MoreDialogComponent } from './parallel/more-dialog/more-dialog.component';

import { RegistersComponent } from './registers.component';
import { ParallelComponent } from './parallel/parallel.component';
import { AdjuvantsComponent } from './adjuvants/adjuvants.component';
import { DialogAdjuvantsComponent } from './adjuvants/dialog-adjuvants/dialog-adjuvants.component';
import { SubstancesComponent } from './substances/substances.component';
import { DialogSubstancesComponent } from './substances/dialog-substances/dialog-substances.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    RegistersRoutingModule,
  ],
  declarations: [
    RegistersComponent,
    MoreDialogComponent,
    ParallelComponent,
    AdjuvantsComponent,
    DialogAdjuvantsComponent,
    SubstancesComponent,
    DialogSubstancesComponent,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getBulgarianPaginatorIntl() }
  ],
  entryComponents: [ MoreDialogComponent, DialogAdjuvantsComponent, DialogSubstancesComponent ],
})
export class RegistersModule { }
