import { Component } from '@angular/core';
import { LeaveDataService } from '../../core/services/leave-data.service';
import { formatDate } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent {

  currentEmployee: any;
  leaveForm!: FormGroup;
  appliedOn = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  name = '';
  designation = '';

  constructor(private fb: FormBuilder, private leaveData: LeaveDataService) {

  }

  ngOnInit(): void {
    const userData = localStorage.getItem('localUserData');
    if (userData != null) {
      this.currentEmployee = JSON.parse(userData);
      this.name = this.currentEmployee.name;
      this.designation = this.currentEmployee.designation;
    }
    this.createForm();
  }
  createForm() {
    this.leaveForm = this.fb.group({
      type: new FormControl('', [Validators.required]),
      leaveFrom: new FormControl('', [Validators.required]),
      leaveTo: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      status: new FormControl('Pending'),
      name: new FormControl(this.name),
      designation: new FormControl(this.designation),
      appliedOn: new FormControl(this.appliedOn)
    });
  }
  onSubmit() {
    if(this.leaveForm.valid) {
      this.leaveData.saveLeave(this.leaveForm.value).subscribe((result) => {
      })
      Swal.fire(
        'Applied!',
        'Leave applied successfully.',
        'success'
      )
    }
  }
}
