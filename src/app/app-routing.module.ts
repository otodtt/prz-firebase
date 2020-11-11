import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CropsComponent } from './crops/crops.component';
import { LegislationComponent } from './legislation/legislation.component';
import { DocumentsComponent } from './documents/documents.component';
import { FormulationsComponent } from './formulations/formulations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'crops', component: CropsComponent },
  // { path: 'practices', loadChildren: './practices/practices.module#PracticesModule' },
  { path: 'practices', loadChildren: () => import('./practices/practices.module').then(m => m.PracticesModule) },
  // { path: 'phases', loadChildren: './phases/phases.module#PhasesModule' },
  { path: 'phases', loadChildren: () => import('./phases/phases.module').then(m => m.PhasesModule) },
  // { path: 'thresholds', loadChildren: './thresholds/thresholds.module#ThresholdsModule' },
  { path: 'thresholds', loadChildren: () => import('./thresholds/thresholds.module').then(m => m.ThresholdsModule) },
  // { path: 'registers', loadChildren: './registers/registers.module#RegistersModule' },
  { path: 'registers', loadChildren: () => import('./registers/registers.module').then(m => m.RegistersModule) },
  { path: 'formulations', component: FormulationsComponent },
  { path: 'legislation', component: LegislationComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'contact', component: ContactsComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModul { }
