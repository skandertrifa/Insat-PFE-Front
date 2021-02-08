import { AuthService } from './../../../services/auth.service';
import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


const SUJET_API = 'http://localhost:3000/sujet';

@Injectable({
  providedIn: 'root'
})

export class DeposerPfeService {

constructor(
  private httpClient: HttpClient,
  private authService : AuthService,
  ) { }

public createSujet(formData) {
    return this.httpClient.post<any>(SUJET_API, formData);
}

public getSujet(id){
  return this.httpClient.get<any>(`${SUJET_API}/student/${id}`);
}


}

