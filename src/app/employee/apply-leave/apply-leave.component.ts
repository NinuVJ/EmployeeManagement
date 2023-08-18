import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from '../../core/services/leave-data.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {
  currentEmployee: any;
  // public appliedOn = this.currentDate.toLocaleDateString();
  public appliedOn = formatDate(new Date(), 'yyyy-MM-dd', 'en');;
  public status = "Pending";
  public name = "";
  public designation = "";

  constructor(private leaveData: LeaveDataService) { }

  ngOnInit(): void {
    const userData = localStorage.getItem('localUserData');
    if (userData != null) {
      this.currentEmployee = JSON.parse(userData);
      this.name = this.currentEmployee.name;
      this.designation = this.currentEmployee.designation;
    }
  }

  getLeaveFormData(data: any) {
    this.leaveData.saveLeave(data).subscribe((result) => {
      console.log(result);
    })
  }

}
