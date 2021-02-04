
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';


import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';



const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'consulter-pfes',
      loadChildren: () => import('./consulter-pfes/consulter-pfes.module')
        .then(m => m.ConsulterPFEsModule),
    },
    {
      path: 'catalogue-pfes',
      loadChildren: () => import('./catalogue-pfes/catalogue-pfes.module')
        .then(m => m.CataloguePFEsModule),
    },
    
    {
      path: 'deposer-pfe',
      loadChildren: () => import('./deposer-pfe/deposer-pfe.module')
        .then(m => m.DeposerPFEModule),
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module')
        .then(m => m.ProfileModule),
    },
    
    {
      path: '',
      redirectTo: 'catalogue-pfes',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
