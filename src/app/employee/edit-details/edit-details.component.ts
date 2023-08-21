import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { constant } from 'src/app/core/constant/constant';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  employeeDetails: any;
  currentEmployeeDetails: any;
  userId: any;

  @ViewChild('employeeForm') form: NgForm | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    const userData = localStorage.getItem('localUserData');
    if (userData != null) {
      this.currentEmployeeDetails = JSON.parse(userData);

      this.userId = this.currentEmployeeDetails.id;
      console.log("current user id = " + this.userId);
      this.http.get(constant.apiEndPoint.allEmployees + this.userId).subscribe(data => {
        this.employeeDetails = data;

        this.form?.setValue({
          designation: this.employeeDetails.designation,
          name: this.employeeDetails.name,
          age: this.employeeDetails.age,
          dob: this.employeeDetails.dob,
          email: this.employeeDetails.email,
          mobile: this.employeeDetails.mobile,
          gender: this.employeeDetails.gender,
          bloodGroup: this.employeeDetails.bloodGroup,
          role : this.employeeDetails.role,
          _image : this.employeeDetails._image
        });
        console.log(this.employeeDetails.role);
        
      });
    }
  }

  onUpdateEmployee(details: {}) {
    this.http.put(constant.apiEndPoint.allEmployees + this.userId, details).subscribe();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your profile updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
