import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  onUpdateLeaveStatus(id: string, details: string) {
    this.currentEmployeeId = id;
    this.http.put('http://localhost:3000/leaves/' + this.currentEmployeeId, details).subscribe();
  }
  getSelectedValue(value: any, id: string) {
    this.currentEmployeeId = id;
    console.log("leave status:", id);

    this.http.put('http://localhost:3000/leaves/' + this.currentEmployeeId, value).subscribe();
  }

}
