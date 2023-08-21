import { Component } from '@angular/core';
import { EmployeeDataService } from '../../core/services/employee-data.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employees: any;
  fileName!: File;

  public newEmployee = {
    designation: '',
    name: '',
    age: '',
    dob: '',
    email: '',
    mobile: '',
    gender: '',
    bloodGroup: '',
    _image: '',
    role: 'employee'
  };

  constructor(private employeeData: EmployeeDataService) { }

  onFileSelected(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.fileName = event.target.result;
      }
    }
  }
  getEmployeeFormData(employeeForm: NgForm) {
    if (employeeForm.valid) {
      this.employeeData.saveEmployee(this.newEmployee).subscribe((result) => {
        Swal.fire(
          'Added!',
          'New employee added.',
          'success'
        )
      })
      employeeForm.resetForm();
    }
  }

}
