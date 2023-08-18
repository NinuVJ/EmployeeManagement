import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  currentEmployeeId: any;
  leaveApplications: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getLeaveApplications();
  }

  getLeaveApplications() {
    this.http.get('http://localhost:3000/leaves').subscribe(leaves => {
      this.leaveApplications = leaves;
    })
  }
  getSelectedValue(details: string, id: string) {

    const updateLeaveStatus = async () => {
      const leaveId = id;
      const updateData = { status: details };

      try {
        const response = await axios.patch(`http://localhost:3000/leaves/${leaveId}`, updateData);
        console.log('Leave status updated successfully:', response.data);
      } catch (error: any) {
        console.error('Error updating leave status:', error.response.data);
      }
    };
    updateLeaveStatus();

  }

}
