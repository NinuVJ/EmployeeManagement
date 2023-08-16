import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { EmployeeDataService } from '../../core/services/employee-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {

  employeeDetails: any[] = [];

  currentEmployeeId: any;
  @ViewChild('employeeForm') form: NgForm | undefined;
  thumbnail: any;

  constructor(private http: HttpClient, private employeeService: EmployeeDataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails(): void {
    this.employeeService.getEmployees().subscribe(details => {
      this.employeeDetails = details;
    });
  }

  onEditClicked(id: string) {
    this.currentEmployeeId = id;
    let currentEmployee = this.employeeDetails.find((p: { id: string; }) => { return p.id === id });
    console.log(currentEmployee);

    this.form?.setValue({
      designation: currentEmployee.designation,
      name: currentEmployee.name,
      age: currentEmployee.age,
      dob: currentEmployee.dob,
      email: currentEmployee.email,
      mobile: currentEmployee.mobile,
      gender: currentEmployee.gender,
      bloodGroup: currentEmployee.bloodGroup
    });
  }

  onUpdateEmployee(details: {}) {
    this.http.put('http://localhost:3000/employees/' + this.currentEmployeeId, details).subscribe();
    this.getEmployeeDetails();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Profile updated',
      showConfirmButton: false,
      timer: 1500
    })

  }

  OnDeleteEmployee(id: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.http.delete('http://localhost:3000/employees/' + id).subscribe();
        this.getEmployeeDetails();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
