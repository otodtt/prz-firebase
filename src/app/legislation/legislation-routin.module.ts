import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislationComponent } from './legislation.component';

export const routes: Routes = [
  { path: '', component: LegislationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LegislationRoutingModul {}
