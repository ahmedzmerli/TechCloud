import { Injectable } from '@angular/core';
import { ModuleFormation } from '../models/moduleformation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleformationService {
  private apiUrl = 'http://localhost:8090/moduleformation'; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) { }
  getApiUrl(): string {
    return this.apiUrl;
  }
  getAllFormation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllFormation`);
  }
  
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllModuleFormationsSortedByTitle`);
  }
  
  getModuleFormationById(id: number): Observable<ModuleFormation> {
    return this.http.get<ModuleFormation>(`${this.apiUrl}/retrieveModuleFormation/${id}`);
  }
  
  addModuleFormation(data: ModuleFormation): Observable<any> {
    return this.http.post(`${this.apiUrl}/addModuleFormation`, data);
  }
 
  deleteModuleFormation(idModuleFormation: string): Observable<void> {
    const url = `${this.apiUrl}/deleteModuleFormation/${idModuleFormation}`;
    return this.http.delete<void>(url);
  }

  updateModuleFormation(idModuleFormation: any, updatedModuleFormation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateModuleFormation/${idModuleFormation}`, updatedModuleFormation);
  }

  retrieveModuleFormation(moduleformationId: string): Observable<ModuleFormation> {
    const url = `${this.apiUrl}/retrieveModuleFormation/${moduleformationId}`;
    return this.http.get<ModuleFormation>(url);
  }
  getAllWithFormation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveallModuleFormationWithFormation`);
  }
  searchModuleFormationsByTitle(titre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/searchModuleFormationsBytitre/${titre}`);
  }
  
}

