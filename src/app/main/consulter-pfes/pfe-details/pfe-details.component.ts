import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'ngx-pfe-details',
  templateUrl: './pfe-details.component.html',
  styleUrls: ['./pfe-details.component.scss']
})
export class PfeDetailsComponent implements OnInit {
  constructor(
    private authService : AuthService,
  ) { }
  user = null;
  role :string = '';
  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const payload = this.authService.getDecodedAccessToken(token);
    console.log(payload)
    this.role = payload.role
    this.user = payload  }

  @ViewChild('item', { static: true }) accordion;

  
}
