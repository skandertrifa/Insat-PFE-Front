import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';


const SOUTENANCE_API = 'http://127.0.0.1:3000/soutenance';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  
  constructor(private http: HttpClient) { }
  getData() : Observable<any>{

    const result=this.http.get(SOUTENANCE_API+'/catalogue');
    console.log("result catalogue data : ",result)
    return result
    
  }
  
}
