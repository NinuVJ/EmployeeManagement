import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = "http://localhost:3000/register";
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this.registerUrl, user)
  }
}
