import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulationsComponent } from './formulations.component';

export const routes: Routes = [
  { path: '', component: FormulationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormulationsRoutingModul {}
