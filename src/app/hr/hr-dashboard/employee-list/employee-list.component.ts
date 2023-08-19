import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { constant } from 'src/app/core/constant/constant';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  currentEmployeeId: any;
  leaveApplications: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLeaveApplications();
  }

  getLeaveApplications() {
    this.http.get(constant.apiEndPoint.allLeaves).subscribe(leaves => {
      this.leaveApplications = leaves;
    })
  }
  getSelectedValue(details: string, id: string) {

    const updateLeaveStatus = async () => {
      const leaveId = id;
      const updateData = { status: details };

      try {
        const response = await axios.patch(constant.apiEndPoint.allLeaves+leaveId, updateData);
        console.log('Leave status updated successfully:', response.data);
      } catch (error: any) {
        console.error('Error updating leave status:', error.response.data);
      }
    };
    updateLeaveStatus();

  }

}
