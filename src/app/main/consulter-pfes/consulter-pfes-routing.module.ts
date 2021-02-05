import { ConsulterPFEsComponent } from './consulter-pfes.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PfeCardComponent } from './pfe-card/pfe-card.component';
import { PfeDetailsComponent } from './pfe-details/pfe-details.component';

const routes: Routes = [{
  path: '',
  component: ConsulterPFEsComponent,
  children:[
  {
    path: '',
    component: PfeCardComponent,
  },

  {
    path: 'details/:id',
    component: PfeDetailsComponent,
  }
]

}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterPFEsRoutingModule {
}
