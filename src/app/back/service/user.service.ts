import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8090/api/admin';

 
  
  private baseUrl = 'http://localhost:9000/api/auth';
  loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private http:HttpClient,private router:Router) { }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveallUser`);
  }
  /*
  signup(signUpRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, signUpRequest);
  }
  signin(loginRequest: any): Observable<any> {
    
    
    return this.http.post(`${this.baseUrl}/login`, loginRequest);
  }
  storeTokenAndRole(token: string): void {
    localStorage.setItem("token", token);

    const decodedToken: any = jwtDecode(token);
    const userRole: string = decodedToken.roles[0];
    localStorage.setItem("role", userRole);
    this.loggedIn.emit(true);
    console.log("this is the logged from the user service ",this.loggedIn)
  }
  getToken(): string | null {
    return localStorage.getItem("token");
  }
  getRole(): string | null {
    return localStorage.getItem("role");
  }
  logout()
  {
    localStorage.clear();
    this.loggedIn.emit(false);
    this.router.navigate(['/login'])

  }*/
}
