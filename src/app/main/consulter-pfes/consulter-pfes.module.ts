import { ConsulterPFEsRoutingModule } from './consulter-pfes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfeCardComponent } from './pfe-card/pfe-card.component';
import { ConsulterPFEsComponent } from './consulter-pfes.component';



@NgModule({
  declarations: [PfeCardComponent,ConsulterPFEsComponent],
  imports: [
    CommonModule,
    ConsulterPFEsRoutingModule
  ]
})
export class ConsulterPFEsModule { }
