import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get<any>(constant.apiEndPoint.registeredUsers);
  }

  getId(): Observable<any> {
    return this.http.get<any>(constant.apiEndPoint.allEmployees);
  }

}
