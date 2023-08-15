import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private registerUrl = "http://localhost:3000/register";
  private employeeUrl = "http://localhost:3000/employees";
  constructor(private router:Router, private http:HttpClient) { }

  login():Observable<any>{
      return this.http.get<any>(this.registerUrl);
  }

  getId():Observable<any>{
    return this.http.get<any>(this.employeeUrl);
  }

  // login(uname:string, pwd:string){

  //   if(uname === 'hr' && pwd === '1234'){
  //     return 200;
  //   }
  //   else if(uname === 'employee' && pwd === '1234'){
  //     return 202;
  //   }
  //   else{
  //     return 403;
  //   }
  // }

  logout(): void {
      this.router.navigate(['login'])
  }
}
