import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    const leaveId = id;
    try {
      this.http.patch(constant.apiEndPoint.allLeaves + leaveId, { "status": details }).subscribe();
      alert("Leave status updated.")
    } catch (error: any) {
      console.error('Error updating leave status');
    }
  }

}
