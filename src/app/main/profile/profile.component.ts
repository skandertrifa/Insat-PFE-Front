import { PfeService } from './../consulter-pfes/services/pfe.service';
import { Enseignant } from './../../models/enseignant';
import { AuthService } from './../../services/auth.service';
import { Student } from './../../models/student';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private pfeService : PfeService,
  ) { }

  user = null;
  role :string = '';
  sujet;
  idStudent :number;
  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const payload = this.authService.getDecodedAccessToken(token);
    console.log(payload)
    this.role = payload.role
    this.user = payload
    if (this.role == 'user'){
      this.idStudent = this.user.studentDetails.id
      this.loadSujets()
    }

  }

  async loadSujets(){
    if (this.role=='user'){
      this.pfeService.getSujetOfStudent(+this.idStudent).subscribe(
        (response)=>{
          this.sujet = response[0]
        },
        (error)=>{
          console.log('error sout student')
        }
      )
    }
  }



}
