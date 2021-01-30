import { ConsulterPFEsComponent } from './consulter-pfes.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PfeCardComponent } from './pfe-card/pfe-card.component';

const routes: Routes = [{
  path: '',
  component: ConsulterPFEsComponent,
  children:[
  {
    path: '',
    component: PfeCardComponent,
  }
]
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterPFEsRoutingModule {
}
