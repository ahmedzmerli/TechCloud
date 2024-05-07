import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from '../model/reclamation/reclamation.model';
const BASIC_URL = "http://localhost:8086";
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }
  
  postReclamation(reclamation: Reclamation, idUser: number): Observable<any> {
    return this.http.post<any>(`${BASIC_URL}/reclamations/Addreclamation/${idUser}`, reclamation);
}
  
  getAllreclamation():Observable<any>{
    return this.http.get(BASIC_URL+"/reclamations/Getreclamation");
  }
  retrieveReclamationById(idrec: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`/Retrievereclamation/${idrec}`);
  }
  updateReclamation(idrec: number, updatedReclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${BASIC_URL}/reclamations/Updatereclamation/${idrec}`, updatedReclamation);
  }
  deleteReclamation(idrec: number): Observable<Reclamation> {
    return this.http.delete<Reclamation>(`${BASIC_URL}/reclamations/deletereclamation/${idrec}`, {});
  }
 
  getReclamationsUtilisateur(idUser: number): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${BASIC_URL}/reclamations/reclamationsUtilisateur/${idUser}`);
  }
  SendSms(to:string,message:string):Observable<any>
  { const url = `http://localhost:8086/Sms?to=${to}&message=${message}`
    return this.http.get(url) 
}
}
