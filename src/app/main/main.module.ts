import { PfeCardComponent } from './consulter-pfes/pfe-card/pfe-card.component';



import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { MainComponent } from './main.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CataloguePFEsModule } from './catalogue-pfes/catalogue-pfes.module';
import { ConsulterPFEsModule } from './consulter-pfes/consulter-pfes.module';
import { DeposerPFEModule } from './deposer-pfe/deposer-pfe.module';
import { MainRoutingModule } from './main-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    CataloguePFEsModule,
    ConsulterPFEsModule,
    DeposerPFEModule,
  ],
  declarations: [
    MainComponent,

  ],
})
export class MainModule {
}



