import { DeposerPFEComponent } from './deposer-pfe.component';
import { DeposerPFERoutingModule } from './deposer-pfe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeposerPFEComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DeposerPFERoutingModule,
    HttpClientModule,
  ]
})
export class DeposerPFEModule { }
