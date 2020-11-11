import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticesComponent } from './practices/practices.component';
import { IntroductionComponent } from './practices/introduction/introduction.component';

/** Grains */
import { TriticumComponent } from './practices/pages/grains/triticum/triticum.component';
import { HordeumComponent } from './practices/pages/grains/hordeum/hordeum.component';
import { AvenaComponent } from './practices/pages/grains/avena/avena.component';
import { SecaleComponent } from './practices/pages/grains/secale/secale.component';
import { ZeaComponent } from './practices/pages/grains/zea/zea.component';
import { RodentiaComponent } from './practices/pages/grains/rodentia/rodentia.component';
/** Beans */
import { PhaseolusComponent } from './practices/pages/beans/phaseolus/phaseolus.component';
import { GlycineComponent } from './practices/pages/beans/glycine/glycine.component';
import { PisumComponent } from './practices/pages/beans/pisum/pisum.component';
import { LensComponent } from './practices/pages/beans/lens/lens.component';
import { CicerComponent } from './practices/pages/beans/cicer/cicer.component';
import { MedicagoComponent } from './practices/pages/beans/medicago/medicago.component';
/** Technical */
import { NicotianaComponent } from './practices/pages/technical/nicotiana/nicotiana.component';
import { BetaComponent } from './practices/pages/technical/beta/beta.component';
import { GossypiumComponent } from './practices/pages/technical/gossypium/gossypium.component';
import { HelianthusComponent } from './practices/pages/technical/helianthus/helianthus.component';
import { BrassicaComponent } from './practices/pages/technical/brassica/brassica.component';
import { ArachisComponent } from './practices/pages/technical/arachis/arachis.component';
/** Vegetables */
import { VegetablesComponent } from './practices/pages/vegetables/vegetables/vegetables.component';
import { PotatoesComponent } from './practices/pages/vegetables/potatoes/potatoes.component';
import { OnionComponent } from './practices/pages/vegetables/onion/onion.component';
import { CabbageComponent } from './practices/pages/vegetables/cabbage/cabbage.component';
import { PumpkinComponent } from './practices/pages/vegetables/pumpkin/pumpkin.component';
import { LeafyComponent } from './practices/pages/vegetables/leafy/leafy.component';

/** Facilities */
import { SolanumComponent } from './practices/pages/facilities/solanum/solanum.component';
import { CucurbitaComponent } from './practices/pages/facilities/cucurbita/cucurbita.component';
import { DecorateComponent } from './practices/pages/facilities/decorate/decorate.component';
import { CapsicumComponent } from './practices/pages/facilities/capsicum/capsicum.component';
import { LeafyFacilitiesComponent } from './practices/pages/facilities/leafy-facilities/leafy-facilities.component';

/** Fruits */
import { SeedComponent } from './practices/pages/fruits/seed/seed.component';
import { StoneComponent } from './practices/pages/fruits/stone/stone.component';

/** Strawberry */
import { FragariaComponent } from './practices/pages/strawberry/fragaria/fragaria.component';
import { RubusComponent } from './practices/pages/strawberry/rubus/rubus.component';
import { NigrumComponent } from './practices/pages/strawberry/nigrum/nigrum.component';

/** Vine */
import { VitisComponent } from './practices/pages/vitis/vitis.component';

export const routes: Routes = [
    { path: '', component: PracticesComponent, children: [
        { path: '', redirectTo: '/practices/introduction', pathMatch: 'full' },
        { path: 'introduction', component: IntroductionComponent },
        { path: 'triticum-spp', component: TriticumComponent},
        { path: 'hordeum-vulgare', component: HordeumComponent},
        { path: 'avena-sativa', component: AvenaComponent},
        { path: 'secale-cereale', component: SecaleComponent},
        { path: 'zea-mays', component: ZeaComponent},
        { path: 'rodentia', component: RodentiaComponent},
        { path: 'phaseolus-vulgaris', component: PhaseolusComponent},
        { path: 'glycine-max', component: GlycineComponent},
        { path: 'pisum-sativum', component: PisumComponent},
        { path: 'lens-culinaris', component: LensComponent},
        { path: 'cicer-arietinum', component: CicerComponent},
        { path: 'medicago-sativa', component: MedicagoComponent},
        { path: 'nicotiana-tabacum', component: NicotianaComponent},
        { path: 'beta-vulgaris', component: BetaComponent},
        { path: 'gossypium', component: GossypiumComponent},
        { path: 'helianthus-annuus', component: HelianthusComponent},
        { path: 'brassica-napus', component: BrassicaComponent},
        { path: 'arachis-hypogaea', component: ArachisComponent},
        { path: 'vegetables', component: VegetablesComponent},
        { path: 'solanum-tuberosum', component: PotatoesComponent},
        { path: 'bulb-crops', component: OnionComponent},
        { path: 'cabbage-crops', component: CabbageComponent},
        { path: 'pumpkin-crops', component: PumpkinComponent},
        { path: 'leaf-vegetables', component: LeafyComponent},
        { path: 'solanum-lycopersicum', component: SolanumComponent},
        { path: 'cucurbitaceae', component: CucurbitaComponent},
        { path: 'decorate', component: DecorateComponent},
        { path: 'capsicum-annuum', component: CapsicumComponent},
        { path: 'leaf-facilities', component: LeafyFacilitiesComponent},
        { path: 'pome-fruit', component: SeedComponent},
        { path: 'stone-fruit', component: StoneComponent},
        { path: 'fragaria', component: FragariaComponent},
        { path: 'rubus-idaeus', component: RubusComponent},
        { path: 'ribes-nigrum', component: NigrumComponent},
        { path: 'vitis-vinifera', component: VitisComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PracticesRoutingModul {}
