import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private registerUrl = "http://localhost:3000/register";
  private hrUrl = "http://localhost:3000/login";
  private employeeUrl = "http://localhost:3000/employees";
  constructor(private router: Router, private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get<any>(this.registerUrl);
  }

  getId(): Observable<any> {
    return this.http.get<any>(this.employeeUrl);
  }

  loginHr(): Observable<any> {
    return this.http.get<any>(this.hrUrl);
  }

}
