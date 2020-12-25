import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { getBulgarianPaginatorIntl } from '../products/shared/services/CustomPaginator';

import { RegistersRoutingModule } from './registers-routing.module';
import { ResizeService } from '../common/services/ResizeService';

/** Firebase */
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireDatabase } from '@angular/fire/database';

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
    MatTableModule,
    MatPaginatorModule,
    RegistersRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    AngularFireDatabaseModule
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
    AngularFireDatabase,
    ResizeService,
    { provide: MatPaginatorIntl, useValue: getBulgarianPaginatorIntl() }
  ],
  entryComponents: [ MoreDialogComponent, DialogAdjuvantsComponent, DialogSubstancesComponent ],
})
export class RegistersModule { }
