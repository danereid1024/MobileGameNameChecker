import { Routes } from '@angular/router';
import { PubgComponent } from './game/pubg/pubg.component';
import { ValorantComponent } from './game/valorant/valorant.component';
import { MobileLegendsComponent } from './game/mobile-legends/mobile-legends.component';
import { JawakerComponent } from './game/jawaker/jawaker.component';
import { GameNameCheckerComponent } from './game-name-checker/game-name-checker.component';
import { RoyalDreamComponent } from './game/royal-dream/royal-dream.component';
import { TeenPattiGoldComponent } from './game/teen-patti-gold/teen-patti-gold.component';
import { BrawlStarsComponent } from './game/brawl-stars/brawl-stars.component';
import { ClashRoyaleComponent } from './game/clash-royale/clash-royale.component';
import { HiggsDominoComponent } from './game/higgs-domino/higgs-domino.component';
import { GenshinImpactComponent } from './game/genshin-impact/genshin-impact.component';
import { PointBlankComponent } from './game/point-blank/point-blank.component';
import { ArenaOfValorComponent } from './game/arena-of-valor/arena-of-valor.component';
import { CallOfDutyMobileComponent } from './game/call-of-duty-mobile/call-of-duty-mobile.component';
import { ClashOfClansComponent } from './game/clash-of-clans/clash-of-clans.component';
import { AceRacerComponent } from './game/ace-racer/ace-racer.component';
import { LifeafterComponent } from './game/lifeafter/lifeafter.component';
import { DragonRajaComponent } from './game/dragon-raja/dragon-raja.component';
import { EggyPartyComponent } from './game/eggy-party/eggy-party.component';
import { HayDayComponent } from './game/hay-day/hay-day.component';
import { BloodStrikeComponent } from './game/blood-strike/blood-strike.component';
import { TomAndJerryChaseComponent } from './game/tom-and-jerry-chase/tom-and-jerry-chase.component';
import { SpeedDriftersComponent } from './game/speed-drifters/speed-drifters.component';
import { RevelationComponent } from './game/revelation/revelation.component';
import { OpmTheStrongestComponent } from './game/opm-the-strongest/opm-the-strongest.component';
import { MuOrigin3Component } from './game/mu-origin-3/mu-origin-3.component';
import { MuDevilsAwakenComponent } from './game/mu-devils-awaken/mu-devils-awaken.component';
import { MetalSlugComponent } from './game/metal-slug/metal-slug.component';
import { HonorOfKingsComponent } from './game/honor-of-kings/honor-of-kings.component';
import { GameTest1Component } from './game-test-1/game-test-1.component';

export const routes: Routes = [
    {path: 'game-name-checker', component: GameNameCheckerComponent},
    {path: 'game1', component: GameTest1Component},
    {path: 'valorant', component: ValorantComponent},
    {path: 'mobile-legends', component:MobileLegendsComponent},
    {path: 'jawaker', component: JawakerComponent},
    {path: 'pubg', component: PubgComponent},
    {path: 'royal-dream', component: RoyalDreamComponent},
    {path: 'teen-patti-gold', component: TeenPattiGoldComponent},
    {path: 'brawl-stars', component: BrawlStarsComponent},
    {path: 'clash-royale', component: ClashRoyaleComponent},
    {path: 'coc', component: ClashOfClansComponent},
    {path: 'higgs-domino', component: HiggsDominoComponent},
    {path: 'genshin', component: GenshinImpactComponent},
    {path: 'point-blank', component: PointBlankComponent},
    {path: 'arena-of-valor', component: ArenaOfValorComponent},
    {path: 'cod-mobile', component: CallOfDutyMobileComponent},
    {path: 'ace-racer', component: AceRacerComponent},
    {path: 'lifeafter', component: LifeafterComponent},
    {path: 'dragon-raja', component: DragonRajaComponent},
    {path: 'eggy-party', component: EggyPartyComponent},
    {path: 'hayday', component: HayDayComponent},
    {path: 'blood-strike', component: BloodStrikeComponent},
    {path: 'tom-and-jerry-chase', component: TomAndJerryChaseComponent},
    {path: 'speed-drifters', component: SpeedDriftersComponent},
    {path: 'revelation', component: RevelationComponent},
    {path: 'opm-the-strongest', component: OpmTheStrongestComponent},
    {path: 'mu-origin-3', component: MuOrigin3Component},
    {path: 'mu-devils-awaken', component: MuDevilsAwakenComponent},
    {path: 'metal-slug', component: MetalSlugComponent},
    {path: 'honor-of-kings', component: HonorOfKingsComponent},
];
