import { Component } from '@angular/core';
import { RegisterService } from '../../core/services/register.service';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  username = "";
  password ="";
  errorMsg = "";

  registerUserData = {};
  constructor(private registerService: RegisterService, private registerData: LoginService) { }

  register(data: any) {
    this.errorMsg = "";
    this.registerData.login().subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.username
      });
      if (user) {
        this.errorMsg = "Already registered";
      }else if(this.username ==="" || this.password ===""){
        this.errorMsg ="Please fill the fields"
      }else {
        this.registerService.registerUser(data).subscribe((res) => {
          console.log(res)
        })
      }
    })
  }
}