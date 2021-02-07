import { Enseignant } from './../../models/enseignant';
import { AuthService } from './../../services/auth.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
    this.user = payload
  }

}
