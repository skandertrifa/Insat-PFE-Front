import { CataloguePFEsRoutingModule } from './catalogue-pfes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CataloguePFEsComponent } from './catalogue-pfes.component';



@NgModule({
  declarations: [CataloguePFEsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CataloguePFEsRoutingModule
    
  ]
})
export class CataloguePFEsModule { }
