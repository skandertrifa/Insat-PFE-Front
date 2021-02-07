import { AuthService } from './../../services/auth.service';
import { DeposerPfeService } from './services/deposer-pfe.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Enseignant } from '../../models/enseignant';
import { EnseignantService } from '../../services/enseignant.service';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-deposer-pfe',
  templateUrl: './deposer-pfe.component.html',
  styleUrls: ['./deposer-pfe.component.scss']
})
export class DeposerPFEComponent implements OnInit {

  private file:File;
  description : string="";
  titre : string="";
  selectedEnseignant :Enseignant=null;
  selectedEnseignantId : string="1";
  enseignants : Enseignant[] = [];

  constructor(
    private sujetService : DeposerPfeService,
    private toastrService: NbToastrService,
    private enseignantService : EnseignantService,
    private authService : AuthService

  ) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const payload = this.authService.getDecodedAccessToken(token);
 
    this.loadSujet(payload.studentDetails.id)
    this.loadEnseignants()
    
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  loadSujet(id){
    this.sujetService.getSujet(id).subscribe(
      (response) => {
        console.log("sujet hi : ",response)
        if(typeof response.titre !==null && typeof response.titre !==undefined)
          this.titre = response.titre;
        if(typeof response.description !==null && typeof response.description !==undefined)
          this.description = response.description;
        if(typeof response.encadrant !==null && typeof response.encadrant !==undefined)
          this.selectedEnseignant = response.encadrant
      })
  }

  loadEnseignants(){
    this.enseignantService.getEnseignants().subscribe(
      (response) => {
        this.enseignants = response;
        if (typeof this.selectedEnseignant!== null && typeof this.selectedEnseignant!== undefined){
          for (const enseignant of this.enseignants){
            if (enseignant.id === this.selectedEnseignant.id){
              this.selectedEnseignant=enseignant
            }
          }
        }
      })
  }

  updateEnseignant(){
    console.log(this.selectedEnseignant)
    this.selectedEnseignantId =  this.selectedEnseignant.id.toString()
  }

  createSujet(sujetForm : NgForm):void{

    console.log(sujetForm.value)
    let fd = new FormData();
    fd.append('titre',sujetForm.value.titre)
    fd.append('description',sujetForm.value.description)
    fd.append('idEncadrant',this.selectedEnseignantId)
    fd.append('fichePropositionPfe',this.file,this.file.name)
    this.sujetService.createSujet(fd).subscribe(
      (response)=>{
        console.log('success')
        this.toastrService.success('Opération effectué avec succès!');
      },
      (error)=>{
        console.log('fail')
        this.toastrService.show("Echec de l'ajout de sujet",{status : "danger"});
      }
    )
  }

}


