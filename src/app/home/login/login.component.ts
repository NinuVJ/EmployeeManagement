import { Component } from '@angular/core';
import {LoginService } from '../../core/services/login.service';
import { RegisterService } from 'src/app/core/services/register.service';
import { Router } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username ="";
  password ="";
  errorMsg ="";
  userId: any;
  logedIn = true;

  constructor(private loginService:LoginService, private router :Router){}

  ngOnInit(): void {
    this.findId();
    
}
login(){
  this.loginService.login().subscribe(res=>{
     const user = res.find((a:any)=>{
      return a.username === this.username && a.password === this.password
    });
    if(user){
      this.logedIn=true;
      this.router.navigate(['employee'])
    }else if(this.username === 'hr' && this.password === '1234'){
      this.logedIn=true;
      this.router.navigate(['hr'])
    }else{
      this.errorMsg = "Invalid credentials";
    }
  })

this.findId();

}  

  findId(){
    this.loginService.getId().subscribe(result=>{
         result.find((b:any)=>{
        if(b.email === this.username){
          console.log("current user id = "+b.id);
          this.userId =b.id;
          return b.id;
        }
      });
    });
  }

}