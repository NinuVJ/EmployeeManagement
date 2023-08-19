import { Component,OnInit } from '@angular/core';
import { LeaveDataService } from 'src/app/core/services/leave-data.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.scss']
})
export class LeaveStatusComponent implements OnInit{
  leave:any;
  name:string ="";

  constructor(private leaveData:LeaveDataService){  }
  ngOnInit(): void {
    this.getLeaveDetails();   
  }

  getLeaveDetails(){
    const userData = localStorage.getItem('localUserData');
    if (userData != null) {
      const currentEmployeeDetails = JSON.parse(userData);
      this.name = currentEmployeeDetails.name;
    }  
    this.leaveData.getLeaves().subscribe(res => {
        res.forEach((element: any) => {
          if(element.name === this.name){     
            this.leave = element; 
          }
        })
    })
  }
}
