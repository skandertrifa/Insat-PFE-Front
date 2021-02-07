import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


const SUJET_API = 'http://127.0.0.1:3000/sujet';
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
  getSujetOfStudent(idUser:number): Observable<any> {
    return this.http.get<any>(SUJET_API+`/student/${idUser}`);
  }
  getOneSoutenance(id:number): Observable<any>{
    return this.http.get<any>(SOUTENANCE_API+`/${id}`);
  }
  getSujetsOfTeacher(idUser:number): Observable<any> {
    return this.http.get<any>(SUJET_API+`/teacher/${idUser}`);
  }

  uploadRapport(fd:FormData){

    return this.http.post<any>(SUJET_API+`/upload/rapport`,fd);
  }

  downloadRapport(id):Observable<any> {
    return this.http.get<any>(SUJET_API+'/downloadRapport'+`/${id}`);
  }


  downloadFiche(id):Observable<any>{
    return this.http.get<any>(SUJET_API+'/downloadFicheProp' + `/${id}`)
  }

  downloadLettre(id):Observable<any>{
    return this.http.get<any>(SUJET_API+'/downloadLettre' + `/${id}`)
  }

}
