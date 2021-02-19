import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { CustomPreloadingStrategy } from './custom-preloading.service';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'crops',
    loadChildren: () => import('./crops/crops.module').then(m => m.CropsModule),
    data: { preload: true, delay: 5000 }
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    data: { preload: true, delay: 5000 }
  },
  {
    path: 'practices',
    loadChildren: () => import('./practices/practices.module').then(m => m.PracticesModule),
    data: { preload: true, delay: 5000 }
  },
  {
    path: 'phases',
    loadChildren: () => import('./phases/phases.module').then(m => m.PhasesModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'thresholds',
    loadChildren: () => import('./thresholds/thresholds.module').then(m => m.ThresholdsModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'registers',
    loadChildren: () => import('./registers/registers.module').then(m => m.RegistersModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'formulations',
    loadChildren: () => import('./formulations/formulations.module').then(m => m.FormulationsModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'legislation',
    loadChildren: () => import('./legislation/legislation.module').then(m => m.LegislationModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'contact',
    loadChildren: () => import( './contacts/contacts.module').then(m => m.ContactsModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'sitemap',
    loadChildren: () => import( './more/sitemap/sitemap.module').then(m => m.SitemapModule),
    data: { preload: true, delay: 10000 }
  },
  {
    path: 'terms',
    loadChildren: () => import( './more/terms/terms.module').then(m => m.TermsModule),
    data: { preload: true, delay: 10000 }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule]
})

export class AppRoutingModul { }
