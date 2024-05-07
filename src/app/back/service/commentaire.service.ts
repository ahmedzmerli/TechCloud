import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:8090/commentaire';
  constructor(private http: HttpClient) { }
  getApiUrl(): string {
    return this.apiUrl;
  }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveallCommentaires`);
  }
  
  getCommentaireById(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${this.apiUrl}/retrieveCommentaire/${id}`);
  }
  
  addCommentaire(data: Commentaire): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCommentaire`, data);
  }
  addCommentaireToPost(postId: number, commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(`http://localhost:8090/commentaire/add-commentaire/${postId}`, commentaire);
  }
  getCommentairesForPost(postId: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`http://localhost:8090/commentaire/retrieveCommentairesForPost/${postId}`);
}

  deleteCommentaire(idCommentaire: string): Observable<void> {
    const url = `${this.apiUrl}/removeCommentaire/${idCommentaire}`;
    return this.http.delete<void>(url);
  }

  updateCommentaire(idCommentaire: any, updatedCommentaire: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateCommentaire/${idCommentaire}`, updatedCommentaire);
  }

  retrieveCommentaire(idCommentaire: string): Observable<Commentaire> {
    const url = `${this.apiUrl}/retrieveCommentaire/${idCommentaire}`;
    return this.http.get<Commentaire>(url);
  }
  getallCommentairesbyPost(postId: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`http://localhost:8090/commentaire/commentaires/${postId}`);
}

}
