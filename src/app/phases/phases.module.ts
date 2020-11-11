import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { PhasesRoutingModul } from './phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

/**  Shared */
import { SideMenuComponent } from './side-menu/side-menu.component';

import { PhasesComponent } from './phases.component';

/**  Pages */
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { GrainsComponent } from './pages/grains/grains/grains.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';
import { OryzaComponent } from './pages/grains/oryza/oryza.component';
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { GlycineComponent } from './pages/beans/glycine/glycine.component';
import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
import { BrassicaNapusComponent } from './pages/technical/brassica/brassica-napus.component';
import { BetaComponent } from './pages/technical/beta/beta.component';
import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';
import { HumulusComponent } from './pages/technical/humulus/humulus.component';
import { SolanumComponent } from './pages/vegetables/solanum/solanum.component';
import { SolanaceousComponent } from './pages/vegetables/solanaceous/solanaceous.component';
import { CucurbitsComponent } from './pages/vegetables/cucurbits/cucurbits.component';
import { BrassicaComponent } from './pages/vegetables/brassica/brassica.component';
import { OtherBrassicaComponent } from './pages/vegetables/other-brassica/other-brassica.component';
import { LeafComponent } from './pages/vegetables/leaf/leaf.component';
import { RootComponent } from './pages/vegetables/root/root.component';
import { BulbComponent } from './pages/vegetables/bulb/bulb.component';
import { PomeComponent } from './pages/fruits/pome/pome.component';
import { StoneComponent } from './pages/fruits/stone/stone.component';
import { StrawberryComponent } from './pages/strawberry/strawberry/strawberry.component';
import { RibesComponent } from './pages/strawberry/ribes/ribes.component';
import { VitisComponent } from './pages/vitis/vitis.component';
import { WeedComponent } from './pages/weed/weed.component';
import { CitrusComponent } from './pages/citrus/citrus.component';

@NgModule({
    imports: [
        CommonModule,
        ShareComponentsModule,
        MaterialModule,
        PhasesRoutingModul
    ],
    declarations: [
        PhasesComponent,
        SideMenuComponent,
        IntroductionComponent,
        GrainsComponent,
        ZeaComponent,
        OryzaComponent,
        PhaseolusComponent,
        ViciaComponent,
        PisumComponent,
        GlycineComponent,
        HelianthusComponent,
        BrassicaNapusComponent,
        BrassicaComponent,
        BetaComponent,
        GossypiumComponent,
        HumulusComponent,
        SolanumComponent,
        SolanaceousComponent,
        CucurbitsComponent,
        OtherBrassicaComponent,
        LeafComponent,
        RootComponent,
        BulbComponent,
        PomeComponent,
        StoneComponent,
        StrawberryComponent,
        RibesComponent,
        VitisComponent,
        WeedComponent,
        CitrusComponent
    ]
})
export class PhasesModule { }

