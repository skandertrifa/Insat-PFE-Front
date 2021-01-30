import { CataloguePFEsComponent } from './catalogue-pfes.component';


import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';








const routes: Routes = [{
  path: '',
  component: CataloguePFEsComponent,
  children : []
      

      
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePFEsRoutingModule {
}
