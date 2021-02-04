import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';


import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: NbToastrService

  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.toastrService.show('Bienvenue !' , "success" , {status : "success"});
        //console.log(response.access_token)
        this.router.navigate(['main']);
      },
      (erreur) => {
        this.toastrService.show('Veuillez vérifier vos credentials',"Erreur",{status : "danger"});
      }
    );
  }

}


  

