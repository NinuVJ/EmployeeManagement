import { Component } from '@angular/core';
import { EmployeeDataService } from '../../core/services/employee-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employees: any;
  fileName!: File;
  public role = "employee";
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

  getEmployeeFormData(data: any) {
    this.employeeData.saveEmployee(data).subscribe((result) => {
    })
  }

}
