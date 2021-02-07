import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


const SOUTENANCE_API = 'http://127.0.0.1:3000/soutenance';



@Injectable({
  providedIn: 'root'
})
export class PfeService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  getSoutenanceOfStudent(idUser:number): Observable<any> {
    return this.http.get<any>(SOUTENANCE_API+`/${idUser}`);
  }

  getSoutenancesOfTeacher(idUser:number): Observable<any> {
    return this.http.get<any>(SOUTENANCE_API+`/${idUser}`);
  }

}
