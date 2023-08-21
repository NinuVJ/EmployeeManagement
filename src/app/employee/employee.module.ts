import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { DetailsComponent } from './employee-dashboard/details/details.component';
import { LeaveStatusComponent } from './employee-dashboard/leave-status/leave-status.component';

@NgModule({
  declarations: [
    ApplyLeaveComponent,
    EmployeeDashboardComponent,
    EditDetailsComponent,
    DetailsComponent,
    LeaveStatusComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
