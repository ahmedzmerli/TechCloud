import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const BASIC_URL= ["http://localhost:8186"]

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) { }
  postEvenement(evenement:any):Observable<any>{
    return this.http.post(BASIC_URL+"/evenements/addEvenement",evenement);
  }
  getAllEvenement():Observable<any>{
    return this.http.get(BASIC_URL+"/evenements/AllEvenement");
  }
  getEvenementById(id:number):Observable<any>{
    return this.http.get(BASIC_URL+"/evenements/Evenement/"+ id);
  }
  updateEvenement(id:number, evenement:any):Observable<any>{
    return this.http.put(BASIC_URL+"/evenements/Evenement/"+ id,evenement);
  }
  deleteEvenement(id:number):Observable<any>{
    return this.http.delete(BASIC_URL+"/evenements/Evenement/"+ id);
  }
  getCommentaires(id:number):Observable<any>{
    return this.http.get(BASIC_URL+"/evenements/evenementId/commentaires"+ id);
  }
  
}
