import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor() { }
  getData(){
    const data=[]
    for (let i =0;i<35;i++)
    {
      data.push({
        id : 1,
        titre : "HII test",
        session : "first session",
        nomEtudiant : "Mokhtar",
        prenomEtudiant : "Mami",
        nomEncadrant : "Riadh",
        prenomEncadrant : "Robbana",
        filiere : "GL",
        sujetTitre : "deeep lea8rning",
        sujetDescription : "deep learning description s8ira2",
      })
    }
    data.push({
      id : 2,
      titre : "HII test2",
      session : "first session",
      sujetTitre : "deeep lea8rning 5ouh",
      sujetDescription : "description s8ira",
      nomEtudiant : "Attia",
      prenomEtudiant : "Ahmed",
      nomEncadrant : "Narjes ",
      filiere : "GL",
      prenomEncadrant : "Robbana",
    })
    return data
    /*return [
      {
        id : 1,
        titre : "HII test",
        session : "first session",
        nomEtudiant : "Mokhtar",
        prenomEtudiant : "Mami",
        nomEncadrant : "Riadh",
        prenomEncadrant : "Robbana",
        filiere : "GL",
        sujetTitre : "deeep lea8rning",
        sujetDescription : "deep learning description s8ira2",
      },
      {
        id : 2,
        titre : "HII test2",
        session : "first session",
        sujetTitre : "deeep lea8rning 5ouh",
        sujetDescription : "description s8ira",
        nomEtudiant : "Attia",
        prenomEtudiant : "Ahmed",
        nomEncadrant : "Narjes ",
        filiere : "GL",
        prenomEncadrant : "Robbana",
      }

    ]*/
  }
}
