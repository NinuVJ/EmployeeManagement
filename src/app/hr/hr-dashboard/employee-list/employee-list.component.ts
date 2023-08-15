import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  isApproved = true;
  isRejected = true;

  leaveApplications:any;
  constructor(private http:HttpClient,private router:Router){  }

  ngOnInit(): void {
    this.getLeaveApplications();
  }

  getLeaveApplications() {
     this.http.get('http://localhost:3000/leaves').subscribe(leaves=>{
      this.leaveApplications = leaves;  
    })
  }
  Approved(){
    this.isRejected = false;
  }
 Rejected(){
  this.isApproved = false;
 }

}
