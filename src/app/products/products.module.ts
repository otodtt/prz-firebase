import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { ProductsRoutingModule } from './products-routing.module';

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
import { getBulgarianPaginatorIntl } from './shared/services/CustomPaginator';

import { ProductsComponent } from './products.component';
import { MoreInfoDialogComponent } from './shared/more-info-dialog/more-info-dialog.component';
import { InsecticidesComponent } from './insecticides/insecticides.component';
import { AcaricidesComponent } from './acaricides/acaricides.component';
import { AcaricideDetailComponent } from './acaricides/acaricide-detail/acaricide-detail.component';
import { NematocidesComponent } from './nematocides/nematocides.component';
import { NematocideDetailComponent } from './nematocides/nematocide-detail/nematocide-detail.component';
import { RodentsComponent } from './rodents/rodents.component';
import { RodentsDialogComponent } from './rodents/rodents-dialog/rodents-dialog.component';
import { LimatsidesComponent } from './limatsides/limatsides.component';
import { LimatsideDetailComponent } from './limatsides/limatside-detail/limatside-detail.component';
import { RepellentsComponent } from './repellents/repellents.component';
import { PheromonesComponent } from './pheromones/pheromones.component';
import { PheromonesDetailComponent } from './pheromones/pheromones-detail/pheromones-detail.component';
import { DesiccantsComponent } from './desiccants/desiccants.component';
import { DesiccantsDetailComponent } from './desiccants/desiccants-detail/desiccants-detail.component';
import { RegulatorsComponent } from './regulators/regulators.component';
import { RegulatorDetailComponent } from './regulators/regulator-detail/regulator-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ShareComponentsModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule
  ],
  declarations: [
    ProductsComponent,
    MoreInfoDialogComponent,
    RodentsDialogComponent,
    InsecticidesComponent,
    AcaricidesComponent,
    AcaricideDetailComponent,
    NematocidesComponent,
    NematocideDetailComponent,
    RodentsComponent,
    LimatsidesComponent,
    LimatsideDetailComponent,
    RepellentsComponent,
    PheromonesComponent,
    PheromonesDetailComponent,
    DesiccantsComponent,
    DesiccantsDetailComponent,
    RegulatorsComponent,
    RegulatorDetailComponent,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getBulgarianPaginatorIntl() }
  ],
  entryComponents: [MoreInfoDialogComponent, RodentsDialogComponent],
})
export class ProductsModule { }
