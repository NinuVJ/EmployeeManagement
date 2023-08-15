import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginComponent} from '../../home/login/login.component';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent {

  employeeDetails:any;
  currentEmployeeId:any;
  @ViewChild('employeeForm') form:NgForm | undefined;

  constructor(private http:HttpClient,private router:Router,private login:LoginComponent){  }

  ngOnInit(): void {
    this.getEmployeeDetails();

  }
  getEmployeeDetails(){
    // const userId = this.login.userId;
    this.http.get('http://localhost:3000/employees/2').subscribe(details=>{
      this.employeeDetails = details;  

      this.form?.setValue({
        designation : this.employeeDetails.designation,
        name : this.employeeDetails.name,
        age : this.employeeDetails.age,
        dob : this.employeeDetails.dob,
        email : this.employeeDetails.email,
        mobile : this.employeeDetails.mobile,
        gender : this.employeeDetails.gender,
        bloodGroup : this.employeeDetails.bloodGroup
      });  
      
    })
  }

  onUpdateEmployee(details:{}){
    const userId = this.login.userId;
    this.http.put('http://localhost:3000/employees/2', details).subscribe();
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your profile updated',
      showConfirmButton: false,
      timer: 1500
    })

  }
}
