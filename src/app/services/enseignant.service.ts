import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


const ENSEIGNANT_API = 'http://127.0.0.1:3000/teacher';


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  getEnseignants(): Observable<any> {
    return this.http.get<any>(ENSEIGNANT_API);
  }

}
