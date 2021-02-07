import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './main-menu';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-main',
  styleUrls: ['main.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class MainComponent implements OnInit {

  menu : NbMenuItem[] = []
  role : string ="role"
  ngOnInit(){
    const token = localStorage.getItem('token')
    const payload = this.authService.getDecodedAccessToken(token);
 
    console.log("payload : ",payload)
    this.role = payload.role
    if (this.role==="user"){
      this.menu = [
        {
          title: 'Catalogue PFEs',
          icon: 'grid-outline',
          link: 'catalogue-pfes',
          home:true
          
        },
        {
          title: 'Consulter vos PFEs',
          icon: 'layout-outline',
          link: 'consulter-pfes',
          
        },
        {
          title: 'Deposer votre PFE',
          icon: 'edit-2-outline',
          link: 'deposer-pfe',
          
        },
        {
          title: 'Profile',
          icon: 'lock-outline',
          link: 'profile',
          
        },
        
      ];
    } 
    else {
      this.menu = [
        {
          title: 'Catalogue PFEs',
          icon: 'grid-outline',
          link: 'catalogue-pfes',
          home:true
          
        },
        {
          title: 'Consulter vos PFEs',
          icon: 'layout-outline',
          link: 'consulter-pfes',
          
        },
        {
          title: 'Profile',
          icon: 'lock-outline',
          link: 'profile',
          
        },
        
      ];
    }
  }
  constructor(private authService : AuthService){}
}