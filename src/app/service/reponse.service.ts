import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reponse } from '../model/reponse/reponse.model';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8086";
@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http:HttpClient) { }
  postReponse(reponse: Reponse, idrec: number): Observable<any> {
    return this.http.post<any>(`${BASIC_URL}/Addreponse/${idrec}`, reponse);
}

}
