import { NbToastrService } from '@nebular/theme';
import { PfeService } from './../services/pfe.service';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'ngx-pfe-details',
  templateUrl: './pfe-details.component.html',
  styleUrls: ['./pfe-details.component.scss']
})
export class PfeDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService : AuthService,
    private pfeService : PfeService,
    private toastrService : NbToastrService,
  ) { }
  private file : File;
  role :string = '';
  idSoutenance : number;
  soutenance;
  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const payload = this.authService.getDecodedAccessToken(token);
    console.log(payload)
    this.role = payload.role

    this.route.params.subscribe(params => {
      console.log("params : ",params);
      this.idSoutenance=+params['id'];
      console.log(this.idSoutenance)
   });

   this.pfeService.getOneSoutenance(this.idSoutenance).subscribe(
     (response)=>{
       this.soutenance = response;
       console.log(this.soutenance)
     },
     (error)=>{
       console.log('fail')
     }
   )
  }

  onFileChange(fileChangeEvent,rapport:NgForm) {
    this.file = fileChangeEvent.target.files[0];
    this.uploadRapport(rapport)
  }


  uploadRapport(uploadForm : NgForm):void{

    console.log(uploadForm.value)
    let fd = new FormData();
    fd.append('rapportPFE',this.file,this.file.name)
    this.pfeService.uploadRapport(fd).subscribe(
      (response)=>{
        console.log('success')
        this.toastrService.show('Upload Done',"Succés",{status : "success"});
      },
      (error)=>{
        console.log('fail')
        this.toastrService.show('Echec! envoye impossible',"Erreur",{status : "danger"});
      }
    )
  }


  handleDownloadRapportPfe(rapportID:number,filename:string){
    this.pfeService.downloadRapport(rapportID).subscribe(
      (response)=>{

        this.downloadBlob(new Blob([response.data]),filename)
      }
    );
  }

  handleDownloadFicheProposition(ficheId:number,filename:string){
    this.pfeService.downloadFiche(ficheId).subscribe(
      (response)=>{
        this.downloadBlob(new Blob([response.data]),filename)
      }
    );
  }

  handleDownloadLettreAffirmation(lettreID:number,filename:string){
    this.pfeService.downloadLettre(lettreID).subscribe(
      (response)=>{
        this.downloadBlob(new Blob([response.data]),filename)
      }
    );
  }

  downloadBlob(blob, name = 'file.pdf') {
    if (
      window.navigator &&
      window.navigator.msSaveOrOpenBlob
    ) return window.navigator.msSaveOrOpenBlob(blob);

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = data;
    link.download = name;

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
    );
  }


  @ViewChild('item', { static: true }) accordion;


}
