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
      nomSession: {
        title: 'Session',
        type: 'string',
      },
      titreSujet: {
        title: 'Titre du Sujet',
        type: 'string',
      },
      descriptionSujet: {
        title: 'Description du Sujet',
        type: 'custom',
        renderComponent: SujetCellComponent,
      },
      filiere: {
        title: 'Filiere',
        type: 'string',
      },
      idRapport: {
        title: 'Rapport',
        type: 'custom',
        renderComponent: RapportCellComponent,
        filter : null
        
      },
      
    },
    actions : null
  };

  source: LocalDataSource = new LocalDataSource();

  processData(data) {
    const result =[]
    for (let row of data){
      const resultRow ={
        "etudiant" : null,
        "encadrant" : null,
        "titre" : null,
        "nomSession" : null, 
        "titreSujet" : null, 
        "descriptionSujet" : null, 
        "filiere" : null,  
        "idRapport" : null, 
      }
      resultRow["etudiant"]=`${row.sujet?.etudiant?.userDetails?.nom} ${row.sujet?.etudiant?.userDetails?.prenom}`
      resultRow["encadrant"]=`${row.sujet?.encadrant?.userDetails?.nom} ${row.sujet?.encadrant?.userDetails?.prenom}`
      resultRow["titre"] = row.titre 
      resultRow["nomSession"] = row.session?.name
      resultRow["titreSujet"] = row.sujet?.titre 
      resultRow["descriptionSujet"] = row.sujet?.description 
      resultRow["filiere"] = row.sujet.etudiant.filiere 
      resultRow["idRapport"] = row.sujet?.rapportPfe?.id 
      result.push(resultRow)

    }
    
    console.log("preprocess result : ",result)
    return result

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

