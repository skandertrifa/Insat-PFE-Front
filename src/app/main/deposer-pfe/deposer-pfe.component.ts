import { DeposerPfeService } from './services/deposer-pfe.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Enseignant } from '../../models/enseignant';
import { EnseignantService } from '../../services/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-deposer-pfe',
  templateUrl: './deposer-pfe.component.html',
  styleUrls: ['./deposer-pfe.component.scss']
})
export class DeposerPFEComponent implements OnInit {

  private file:File;
  description : string;
  titre : string;
  selectedEnseignant :Enseignant;
  selectedEnseignantId : string;
  enseignants : Enseignant[] = [];

  constructor(
    private router: Router,
    private sujetService : DeposerPfeService,
    private toastrService: NbToastrService,
    private enseignantService : EnseignantService,

  ) {
  }

  ngOnInit(): void {
    this.loadEnseignants()
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  loadEnseignants(){
    this.enseignantService.getEnseignants().subscribe(
      (response) => {
        this.enseignants = response;
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
      
        this.router.navigate(['/main/consulter-pfes']);
      
      },
      (error)=>{
        console.log('fail')
        this.toastrService.show('Echec! envoye impossible',"Erreur",{status : "danger"});
      }
    )

    
  }

  
}