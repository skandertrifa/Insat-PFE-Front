import { ConsulterPFEsRoutingModule } from './consulter-pfes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfeCardComponent } from './pfe-card/pfe-card.component';
import { ConsulterPFEsComponent } from './consulter-pfes.component';
import { PfeDetailsComponent } from './pfe-details/pfe-details.component';
import { AfficherPfeCardsComponent } from './afficher-pfe-cards/afficher-pfe-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { AccordionComponent } from '../layout/accordion/accordion.component';
import { InfiniteListComponent } from '../layout/infinite-list/infinite-list.component';
import { NewsPostPlaceholderComponent } from '../layout/infinite-list/news-post-placeholder/news-post-placeholder.component';
import { NewsPostComponent } from '../layout/infinite-list/news-post/news-post.component';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { ListComponent } from '../layout/list/list.component';
import { NewsService } from '../layout/news.service';
import { StepperComponent } from '../layout/stepper/stepper.component';
import { TabsComponent, Tab1Component, Tab2Component } from '../layout/tabs/tabs.component';


@NgModule({
  declarations: [PfeCardComponent,ConsulterPFEsComponent, PfeDetailsComponent, AfficherPfeCardsComponent,LayoutComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    StepperComponent,
    ListComponent,
    NewsPostPlaceholderComponent,
    InfiniteListComponent,
    NewsPostComponent,
    AccordionComponent,
  ],
  providers: [
    NewsService,
  ],
  imports: [
    CommonModule,
    ConsulterPFEsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
  ]
})
export class ConsulterPFEsModule { }
