import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constant } from 'src/app/core/constant/constant';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: any;
  thumbnail: any;
  userId: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    const userData = localStorage.getItem('localUserData');
    if (userData != null) {
      const currentEmployeeDetails = JSON.parse(userData);
      this.userId = currentEmployeeDetails.id;
      this.http.get(constant.apiEndPoint.allEmployees + this.userId).subscribe(data => {
        this.employee = data;
    });  
    }
  }
}
