


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardModule } from '../main/dashboard/dashboard.module';
import { MiscellaneousModule } from '../main/miscellaneous/miscellaneous.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [AuthComponent, LoginComponent],
  
  imports: [
    CommonModule,
    //BrowserModule,
    AuthRoutingModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    RouterModule,
    FormsModule,
    NbIconModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    ToastrModule.forRoot(), // ToastrModule added
    
  ]
})
export class AuthModule { }
