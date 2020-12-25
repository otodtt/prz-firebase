import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { ThresholdsRoutingModul } from './thresholds-routing.module';
import { ResizeService } from '../common/services/ResizeService';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/** Shared */
import { SideMenuComponent } from './side-menu/side-menu.component';

import { ThresholdsComponent, ThresholdsDialogComponent } from './thresholds/thresholds.component';
import { TriticumComponent } from './pages/grains/triticum/triticum.component';
import { HordeumComponent } from './pages/grains/hordeum/hordeum.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { MedicagoComponent } from './pages/beans/medicago/medicago.component';
import { BrassicaComponent } from './pages/technical/brassica/brassica.component';
import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
import { BetaComponent } from './pages/technical/beta/beta.component';
import { NicotianaComponent } from './pages/technical/nicotiana/nicotiana.component';
import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';
import { CannabisComponent } from './pages/technical/cannabis/cannabis.component';
import { HumulusComponent } from './pages/technical/humulus/humulus.component';
import { MenthaComponent } from './pages/etheric/mentha/mentha.component';
import { RosaComponent } from './pages/etheric/rosa/rosa.component';
import { LycopersicumComponent } from './pages/vegetables/lycopersicum/lycopersicum.component';
import { CapsicumComponent } from './pages/vegetables/capsicum/capsicum.component';
import { MelongenaComponent } from './pages/vegetables/melongena/melongena.component';
import { CucumisComponent } from './pages/vegetables/cucumis/cucumis.component';
import { CitrullusComponent } from './pages/vegetables/citrullus/citrullus.component';
import { AlliumComponent } from './pages/vegetables/allium/allium.component';
import { OleraceaComponent } from './pages/vegetables/oleracea/oleracea.component';
import { DaucusComponent } from './pages/vegetables/daucus/daucus.component';
import { SolanumComponent } from './pages/vegetables/solanum/solanum.component';
import { MalusComponent } from './pages/fruits/malus/malus.component';
import { CerasusComponent } from './pages/fruits/cerasus/cerasus.component';
import { PersicaComponent } from './pages/fruits/persica/persica.component';
import { PrunusComponent } from './pages/fruits/prunus/prunus.component';
import { FragariaComponent } from './pages/fragaria/fragaria.component';
import { VitisComponent } from './pages/vitis/vitis.component';

@NgModule({
    imports: [
        CommonModule,
        ThresholdsRoutingModul,
        ShareComponentsModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        ThresholdsDialogComponent,
        ThresholdsComponent,
        SideMenuComponent,
        TriticumComponent,
        HordeumComponent,
        ZeaComponent,
        PhaseolusComponent,
        PisumComponent,
        ViciaComponent,
        MedicagoComponent,
        BrassicaComponent,
        HelianthusComponent,
        BetaComponent,
        NicotianaComponent,
        GossypiumComponent,
        CannabisComponent,
        HumulusComponent,
        MenthaComponent,
        RosaComponent,
        LycopersicumComponent,
        CapsicumComponent,
        MelongenaComponent,
        CucumisComponent,
        CitrullusComponent,
        AlliumComponent,
        OleraceaComponent,
        DaucusComponent,
        SolanumComponent,
        MalusComponent,
        CerasusComponent,
        PersicaComponent,
        PrunusComponent,
        FragariaComponent,
        VitisComponent
    ],
    providers: [ResizeService],
    entryComponents: [ThresholdsDialogComponent],
})
export class ThresholdsModule { }
