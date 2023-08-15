import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../../home/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  isCorrect = false;
  constructor(private router: Router, private login: LoginComponent) { }

  login1() {
    if (this.login.logedIn) {
      this.isCorrect == true;
    } else {
      this.isCorrect == false;

    }
  }

}
