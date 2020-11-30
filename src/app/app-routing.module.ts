import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'crops', loadChildren: () => import('./crops/crops.module').then(m => m.CropsModule) },
  { path: 'practices', loadChildren: () => import('./practices/practices.module').then(m => m.PracticesModule) },
  { path: 'phases', loadChildren: () => import('./phases/phases.module').then(m => m.PhasesModule) },
  { path: 'thresholds', loadChildren: () => import('./thresholds/thresholds.module').then(m => m.ThresholdsModule) },
  { path: 'registers', loadChildren: () => import('./registers/registers.module').then(m => m.RegistersModule) },
  { path: 'formulations', loadChildren: () => import('./formulations/formulations.module').then(m => m.FormulationsModule) },
  { path: 'legislation', loadChildren: () => import('./legislation/legislation.module').then(m => m.LegislationModule) },
  { path: 'documents', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) },
  { path: 'contact', loadChildren: () => import( './contacts/contacts.module').then(m => m.ContactsModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModul { }
