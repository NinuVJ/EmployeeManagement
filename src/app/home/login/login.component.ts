import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = "";
  password = "";
  errorMsg = "";
  userId: any;
  logedIn = true;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.findId();
    localStorage.setItem('token', Math.random().toString());
    this.loginService.login().subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.username && a.password === this.password
      });

      if (user) {
        this.logedIn = true;
        this.router.navigate(['employee'])
      } else if (this.username === 'hr' && this.password === '1234') {
        this.logedIn = true;
        this.router.navigate(['hr'])
      } else {
        this.errorMsg = "Invalid credentials";
      }
    })

  }

  findId() {
    this.loginService.getId().subscribe(result => {
      result.find((b: any) => {
        if (b.email === this.username) {
          localStorage.setItem('localUserData', JSON.stringify(b));
        }
      });
    });
  }

}
