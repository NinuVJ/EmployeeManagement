import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(constant.apiEndPoint.registeredUsers, user)
  }
}
