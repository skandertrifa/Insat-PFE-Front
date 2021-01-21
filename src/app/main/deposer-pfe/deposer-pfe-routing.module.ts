
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeposerPFEComponent } from './deposer-pfe.component';

const routes: Routes = [{
  path: '',
  component: DeposerPFEComponent,
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeposerPFERoutingModule {
}
