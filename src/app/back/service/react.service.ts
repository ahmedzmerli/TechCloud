import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { React } from 'src/app/models/react';


@Injectable({
  providedIn: 'root'
})
export class ReactService {
  private apiUrl = 'http://localhost:8090/react';
  constructor(private http: HttpClient) { }
  getApiUrl(): string {
    return this.apiUrl;
  }
 getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllReacts`);
  }

  getReactById(id: number): Observable<React> {
    return this.http.get<React>(`${this.apiUrl}/retrieveReact/${id}`);
  }
  
  addReact(data: React): Observable<any> {
    return this.http.post(`${this.apiUrl}/addReact`, data);
  }
 
  deleteReact(idReact: string): Observable<void> {
    const url = `${this.apiUrl}/removeReact/${idReact}`;
    return this.http.delete<void>(url);
  }

  updateReact(idReact: any, updatedReact: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateReact/${idReact}`, updatedReact);
  }

  retrieveReact(idReact: string): Observable<React> {
    const url = `${this.apiUrl}/retrieveReact/${idReact}`;
    return this.http.get<React>(url);
  }
}
