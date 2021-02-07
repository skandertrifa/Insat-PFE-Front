import { CatalogueService } from './../../services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SujetCellComponent } from '../sujet-cell/sujet-cell.component';
import { RapportCellComponent } from '../rapport-cell/rapport-cell.component';
import { Catalogue } from '../../models/catalogue';




@Component({
  selector: 'ngx-catalogue-table',
  templateUrl: './catalogue-table.component.html',
  styleUrls: ['./catalogue-table.component.scss']
})
export class CatalogueTableComponent {

  catalogue : Catalogue[] =[]

  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      titre: {
        title: 'Titre',
        type: 'string',
      },
      etudiant: {
        title: 'Etudiant',
        type: 'string',
      },
      encadrant: {
        title: 'Encadrant',
        type: 'string',
      },
      session: {
        title: 'Session',
        type: 'string',
      },
      sujetTitre: {
        title: 'Titre du Sujet',
        type: 'string',
      },
      sujetDescription: {
        title: 'Description du Sujet',
        type: 'custom',
        renderComponent: SujetCellComponent,
      },
      filiere: {
        title: 'Filiere',
        type: 'string',
      },
      id: {
        title: 'Rapport',
        type: 'custom',
        renderComponent: RapportCellComponent,
        filter : null
        
      },
      
    },
    actions : null
  };

  source: LocalDataSource = new LocalDataSource();

  processData(data : Catalogue[]){
    for (let row of data){
      row["etudiant"]=`${row["nomEtudiant"]} ${row["prenomEtudiant"]}`
      row["encadrant"]=`${row["nomEncadrant"]} ${row["prenomEncadrant"]}`
    }
    console.log("last form data : ",data)
    return data

  }
  loadCatalogue(){
    this.service.getData().subscribe(
      (response)=>{
        console.log("real catalogue : ",response)
        this.catalogue=response
        this.source.load(this.processData(response));
      }
    )
  }
  constructor(private service: CatalogueService) {
    this.loadCatalogue()
    
  }

  
}

