import { PfeService } from './../services/pfe.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-afficher-pfe-cards',
  templateUrl: './afficher-pfe-cards.component.html',
  styleUrls: ['./afficher-pfe-cards.component.scss']
})
export class AfficherPfeCardsComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private pfeService : PfeService,
  ) { }

  role :string = '';
  idUser : number ;
  soutenances = [];
  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const payload = this.authService.getDecodedAccessToken(token);

    console.log(payload)
    this.role = payload.role
    if (this.role=='user'){
      this.idUser = payload.studentDetails.id
    }else if (this.role == 'teacher'){
      this.idUser = payload.teacherDetails.id
    }
    console.log(this.idUser)
    this.loadSoutenances()
    }

    async loadSoutenances(){
      if (this.role=='user'){
        this.pfeService.getSoutenanceOfStudent(+this.idUser).subscribe(
          (response)=>{
            this.soutenances.push(response)
            console.log(this.soutenances)
          },
          (error)=>{
            console.log('error sout student')
          }
        )
      }else if (this.role == 'teacher'){

        this.pfeService.getSoutenancesOfTeacher(+this.idUser).subscribe(
          (response)=>{
            this.soutenances = response
            console.log(this.soutenances)
          },
          (error)=>{
            console.log('error sout teacher')
          }
        )

      }
    }

}
