import { ConsulterPFEsRoutingModule } from './consulter-pfes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfeCardComponent } from './pfe-card/pfe-card.component';
import { ConsulterPFEsComponent } from './consulter-pfes.component';
import { PfeDetailsComponent } from './pfe-details/pfe-details.component';
import { AfficherPfeCardsComponent } from './afficher-pfe-cards/afficher-pfe-cards.component';



@NgModule({
  declarations: [PfeCardComponent,ConsulterPFEsComponent, PfeDetailsComponent, AfficherPfeCardsComponent],
  imports: [
    CommonModule,
    ConsulterPFEsRoutingModule
  ]
})
export class ConsulterPFEsModule { }
