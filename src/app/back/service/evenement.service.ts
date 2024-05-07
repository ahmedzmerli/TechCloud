import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Commentaire } from '../Models/commentaire';
import { Evenement } from '../Models/evenement';
const BASIC_URL= ["http://localhost:8186"]

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) { }
  postEvenement(evenement:any , file : File):Observable<any>{
    console.log(evenement)
  
    let formData: FormData = new FormData();

    // Append the file to the FormData object
    formData.append('file', file);

    // Append the entire lostandfound object as a JSON string to FormData
    formData.append('evenement', JSON.stringify(evenement));
     console.log(formData.getAll)

    // Send POST request with FormData as the body
    return this.http.post<any>("http://localhost:8186/evenements/addEvenement", formData);


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
    return this.http.get(BASIC_URL+"/evenements/commentaires/"+ id);
    // return this.http.get(BASIC_URL+"/evenements/",+`id`+"/commentaires/");
    
  }
  getParticipationStatistics(): Observable<any> {
    return this.http.get<any>(BASIC_URL+"/evenements/stats");
  }
  SendSMS( ): Observable<any> {
   
    return this.http.get(BASIC_URL+"/evenements/sendSms")
  }
   
  ajouterCommentaire(id : number ,contenuCommentaire: string): Observable<Commentaire> {
    // Supposons que vous ayez une variable d'instance pour stocker l'ID de l'événement courant
    
    return this.http.post<Commentaire>(BASIC_URL+'/evenements/commentaires'+'/'+ id,contenuCommentaire);
  }

  

//   ajouterCommentaire(evenementId: number, contenuCommentaire: string): Observable<any> {
//     const commentaire = {
//       description: contenuCommentaire,
//       date_commentaire: new Date()
//     };

//     return this.http.post<any>(BASIC_URL + '/commentaires/' + evenementId, commentaire);
// }

  
  
}
