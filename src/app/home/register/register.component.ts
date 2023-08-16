import { Component } from '@angular/core';
import { RegisterService } from '../../core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  registerUserData = {};
  constructor(private registerService: RegisterService) { }

  register(data: any) {
    this.registerService.registerUser(data).subscribe((res) => {
      console.log(res)

    })
  }
}