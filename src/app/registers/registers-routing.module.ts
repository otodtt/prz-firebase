import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistersComponent } from './registers.component';
import { ParallelComponent } from './parallel/parallel.component';
import { AdjuvantsComponent } from './adjuvants/adjuvants.component';
import { SubstancesComponent } from './substances/substances.component';
import { FirmsComponent } from './firms/firms.component';

export const routes: Routes = [
    {
      path: '', component: RegistersComponent, children: [
        { path: '', redirectTo: '/firms', pathMatch: 'full' },
        { path: 'parallel-trade', component: ParallelComponent },
        { path: 'adjuvants', component: AdjuvantsComponent },
        { path: 'substances', component: SubstancesComponent },
        { path: 'firms', component: FirmsComponent },
      ]
    }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RegistersRoutingModule { }
