import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThresholdsComponent } from './thresholds/thresholds.component';

/** Grains */
import { TriticumComponent } from './pages/grains/triticum/triticum.component';
import { HordeumComponent } from './pages/grains/hordeum/hordeum.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';

/** Beans */
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { MedicagoComponent } from './pages/beans/medicago/medicago.component';

/** Technical */
import { BrassicaComponent } from './pages/technical/brassica/brassica.component';
import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
import { BetaComponent } from './pages/technical/beta/beta.component';
import { NicotianaComponent } from './pages/technical/nicotiana/nicotiana.component';
import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';
import { CannabisComponent } from './pages/technical/cannabis/cannabis.component';
import { HumulusComponent } from './pages/technical/humulus/humulus.component';

/** Etheric */
import { MenthaComponent } from './pages/etheric/mentha/mentha.component';
import { RosaComponent } from './pages/etheric/rosa/rosa.component';

/** Vegetables */
import { LycopersicumComponent } from './pages/vegetables/lycopersicum/lycopersicum.component';
import { CapsicumComponent } from './pages/vegetables/capsicum/capsicum.component';
import { MelongenaComponent } from './pages/vegetables/melongena/melongena.component';
import { CucumisComponent } from './pages/vegetables/cucumis/cucumis.component';
import { CitrullusComponent } from './pages/vegetables/citrullus/citrullus.component';
import { AlliumComponent } from './pages/vegetables/allium/allium.component';
import { OleraceaComponent } from './pages/vegetables/oleracea/oleracea.component';
import { DaucusComponent } from './pages/vegetables/daucus/daucus.component';
import { SolanumComponent } from './pages/vegetables/solanum/solanum.component';

/** Fruits */
import { MalusComponent } from './pages/fruits/malus/malus.component';
import { CerasusComponent } from './pages/fruits/cerasus/cerasus.component';
import { PersicaComponent } from './pages/fruits/persica/persica.component';
import { PrunusComponent } from './pages/fruits/prunus/prunus.component';

/** Fragaria and Vitis */
import { FragariaComponent } from './pages/fragaria/fragaria.component';
import { VitisComponent } from './pages/vitis/vitis.component';

export const routes: Routes = [
  {
    path: '', component: ThresholdsComponent, children: [
      { path: '', redirectTo: '/thresholds/triticum-spp', pathMatch: 'full' },
      { path: 'triticum-spp', component: TriticumComponent },
      { path: 'hordeum-vulgare', component: HordeumComponent },
      { path: 'zea-mays', component: ZeaComponent },
      { path: 'phaseolus-vulgaris', component: PhaseolusComponent },
      { path: 'pisum-sativum', component: PisumComponent },
      { path: 'vicia-villosa', component: ViciaComponent },
      { path: 'medicago-sativa', component: MedicagoComponent },
      { path: 'brassica-napus', component: BrassicaComponent },
      { path: 'helianthus-annuus', component: HelianthusComponent },
      { path: 'beta-vulgaris', component: BetaComponent },
      { path: 'nicotiana-tabacum', component: NicotianaComponent },
      { path: 'gossypium', component: GossypiumComponent },
      { path: 'cannabis-and-linum', component: CannabisComponent },
      { path: 'humulus-lupulus', component: HumulusComponent },
      { path: 'mentha-and-lavandula', component: MenthaComponent },
      { path: 'rosa-damascena', component: RosaComponent },
      { path: 'solanum-lycopersicum', component: LycopersicumComponent },
      { path: 'capsicum-annuum', component: CapsicumComponent },
      { path: 'solanum-melongena', component: MelongenaComponent },
      { path: 'cucumis-sativus', component: CucumisComponent },
      { path: 'cucumis-and-citrullus', component: CitrullusComponent },
      { path: 'allium', component: AlliumComponent },
      { path: 'brassica-oleracea', component: OleraceaComponent },
      { path: 'daucus-carota', component: DaucusComponent },
      { path: 'solanum-tuberosum', component: SolanumComponent },
      { path: 'malus-and-pyrus', component: MalusComponent },
      { path: 'prunus-and-cerasus', component: CerasusComponent },
      { path: 'prunus-persica', component: PersicaComponent },
      { path: 'prunus-domestica', component: PrunusComponent },
      { path: 'fragaria-and-rubus', component: FragariaComponent },
      { path: 'vitis-vinifera', component: VitisComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThresholdsRoutingModul { }

