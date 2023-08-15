import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

 registerUserData = {};

  constructor(private registerService:RegisterService){}

  ngOnInit(): void {
    
  }

  register(data:any){
      this.registerService.registerUser(data).subscribe((res)=> {
        console.log(res)

      })
    }
  }