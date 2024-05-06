import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificat } from '../models/certificat';
import { Observable } from 'rxjs';
import { ModuleFormation } from '../models/moduleformation';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {
  private apiUrl = 'http://localhost:8090/certificat';
  constructor(private http: HttpClient) { }
  getApiUrl(): string {
    return this.apiUrl;
  }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveallCertificat`);
  }
  
  getCertificatById(id: number): Observable<Certificat> {
    return this.http.get<Certificat>(`${this.apiUrl}/retrieveCertificat/${id}`);
  }
  
 /* addCertificat(data: Certificat): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCertificat`, data);
  }*/
  addCertificat(data: Certificat, moduleId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCertificatt?moduleId=${moduleId}`, data);
  }
  
 
  deleteCertificat(idCertificat: string): Observable<void> {
    const url = `${this.apiUrl}/deleteCertificat/${idCertificat}`;
    return this.http.delete<void>(url);
  }

  updateCertificat(idCertificat: any, updatedCertificat: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateCertificat/${idCertificat}`, updatedCertificat);
  }

  retrieveCertificat(idCertificat: string): Observable<Certificat> {
    const url = `${this.apiUrl}/retrieveCertificat/${idCertificat}`;
    return this.http.get<Certificat>(url);
  }
  getAllWithModuleFormation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveallCertificatWithModuleFormation`);
  }
  getAllWithModuleFormationuser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveallCertificatWithUserAndModuleFormation`);
  }
  getAllModuleFormations(): Observable<ModuleFormation[]> {
    return this.http.get<ModuleFormation[]>(`${this.apiUrl}/allModuleFormations`);
  }
}
