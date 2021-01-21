import { ConsulterPFEsComponent } from './consulter-pfes.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: ConsulterPFEsComponent,
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterPFEsRoutingModule {
}
