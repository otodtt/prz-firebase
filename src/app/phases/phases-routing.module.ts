import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhasesComponent } from './phases.component';

/** Grains */
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { GrainsComponent } from './pages/grains/grains/grains.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';
import { OryzaComponent } from './pages/grains/oryza/oryza.component';

/** Beans */
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { GlycineComponent } from './pages/beans/glycine/glycine.component';

/** Technical */
import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
import { BrassicaNapusComponent } from './pages/technical/brassica/brassica-napus.component';
import { BetaComponent } from './pages/technical/beta/beta.component';
import { HumulusComponent } from './pages/technical/humulus/humulus.component';
import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';

/** Vegetables */
import { SolanumComponent } from './pages/vegetables/solanum/solanum.component';
import { SolanaceousComponent } from './pages/vegetables/solanaceous/solanaceous.component';
import { CucurbitsComponent } from './pages/vegetables/cucurbits/cucurbits.component';
import { BrassicaComponent } from './pages/vegetables/brassica/brassica.component';
import { LeafComponent } from './pages/vegetables/leaf/leaf.component';
import { OtherBrassicaComponent } from './pages/vegetables/other-brassica/other-brassica.component';
import { RootComponent } from './pages/vegetables/root/root.component';
import { BulbComponent } from './pages/vegetables/bulb/bulb.component';

/** Fruits */
import { PomeComponent } from './pages/fruits/pome/pome.component';
import { StoneComponent } from './pages/fruits/stone/stone.component';


/** Fragaria and Vitis */
import { StrawberryComponent } from './pages/strawberry/strawberry/strawberry.component';
import { RibesComponent } from './pages/strawberry/ribes/ribes.component';
import { VitisComponent } from './pages/vitis/vitis.component';
import { CitrusComponent } from './pages/citrus/citrus.component';
import { WeedComponent } from './pages/weed/weed.component';

export const routes: Routes = [
    { path: '', component: PhasesComponent, children: [
        { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
        { path: 'introduction', component: IntroductionComponent },
        { path: 'cereals', component: GrainsComponent},
        { path: 'maize', component: ZeaComponent },
        { path: 'rice', component: OryzaComponent },
        { path: 'bean', component: PhaseolusComponent },
        { path: 'faba-bean', component: ViciaComponent },
        { path: 'pea', component: PisumComponent },
        { path: 'soybean', component: GlycineComponent },
        { path: 'sunflower', component: HelianthusComponent },
        { path: 'oilseed-rape', component: BrassicaNapusComponent },
        { path: 'beet', component: BetaComponent },
        { path: 'hop', component: HumulusComponent },
        { path: 'cotton', component: GossypiumComponent },
        { path: 'potato', component: SolanumComponent },
        { path: 'solanaceous-fruits', component: SolanaceousComponent },
        { path: 'cucurbits', component: CucurbitsComponent },
        { path: 'brassica', component: BrassicaComponent },
        { path: 'leaf-vegetables', component: LeafComponent },
        { path: 'other-brassica', component: OtherBrassicaComponent },
        { path: 'root-and-stem', component: RootComponent },
        { path: 'bulb-vegetables', component: BulbComponent },
        { path: 'pome-fruit', component: PomeComponent },
        { path: 'stone-fruit', component: StoneComponent },
        { path: 'strawberry', component: StrawberryComponent },
        { path: 'currants', component: RibesComponent },
        { path: 'grapevine', component: VitisComponent },
        { path: 'citrus', component: CitrusComponent },
        { path: 'weed-species', component: WeedComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PhasesRoutingModul {}

