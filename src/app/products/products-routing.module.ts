import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AcaricidesComponent } from './acaricides/acaricides.component';
import { AcaricideDetailComponent } from './acaricides/acaricide-detail/acaricide-detail.component';
import { InsecticidesComponent } from './insecticides/insecticides.component';
import { FungicidesComponent } from './fungicides/fungicides.component';
import { HerbicidesComponent } from './herbicides/herbicides.component';
import { NematocidesComponent } from './nematocides/nematocides.component';
import { NematocideDetailComponent } from './nematocides/nematocide-detail/nematocide-detail.component';
import { RodentsComponent } from './rodents/rodents.component';
import { LimatsidesComponent } from './limatsides/limatsides.component';
import { LimatsideDetailComponent } from './limatsides/limatside-detail/limatside-detail.component';
import { RepellentsComponent } from './repellents/repellents.component';
import { PheromonesComponent } from './pheromones/pheromones.component';
import { PheromonesDetailComponent } from './pheromones/pheromones-detail/pheromones-detail.component';
import { DesiccantsComponent } from './desiccants/desiccants.component';
import { DesiccantsDetailComponent } from './desiccants/desiccants-detail/desiccants-detail.component';
import { RegulatorsComponent } from './regulators/regulators.component';
import { RegulatorDetailComponent } from './regulators/regulator-detail/regulator-detail.component';

export const routes: Routes = [
  {
    path: '', component: ProductsComponent, children: [
      { path: '', redirectTo: '/acaricides', pathMatch: 'full' },
      { path: 'insecticides', component: InsecticidesComponent },
      { path: 'fungicides', component: FungicidesComponent },
      { path: 'herbicides', component: HerbicidesComponent },
      { path: 'acaricides', component: AcaricidesComponent },
      { path: 'acaricides/:id', component: AcaricideDetailComponent },
      { path: 'nematocides', component: NematocidesComponent },
      { path: 'nematocides/:id', component: NematocideDetailComponent },
      { path: 'rodenticides', component: RodentsComponent },
      { path: 'limatsides', component: LimatsidesComponent },
      { path: 'limatsides/:id', component: LimatsideDetailComponent },
      { path: 'repellents', component: RepellentsComponent },
      { path: 'pheromones', component: PheromonesComponent },
      { path: 'pheromones/:id', component: PheromonesDetailComponent },
      { path: 'desiccants', component: DesiccantsComponent },
      { path: 'desiccants/:id', component: DesiccantsDetailComponent },
      { path: 'regulators', component: RegulatorsComponent },
      { path: 'regulators/:id', component: RegulatorDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
