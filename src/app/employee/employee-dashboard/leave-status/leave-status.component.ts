import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginComponent} from '../../../home/login/login.component';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.scss']
})
export class LeaveStatusComponent implements OnInit{
  leave:any;

  constructor(private http:HttpClient,private router:Router, private login:LoginComponent){  }
  ngOnInit(): void {
    this.getLeaveDetails();
  }

  getLeaveDetails(){
    // const userId = this.login.userId;
    this.http.get('http://localhost:3000/leaves/2').subscribe(status=>{
      this.leave = status;  
    })
  }
}
