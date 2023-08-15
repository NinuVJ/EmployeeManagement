import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { DetailsComponent } from './employee-dashboard/details/details.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { authenticationGuard } from '../core/guards/authentication.guard';

const routes: Routes = [
  
    {path:'employee', component: EmployeeDashboardComponent,

     children:[
      { path:'',  component: DetailsComponent},
      { path:'dashboard', component: DetailsComponent},
      { path: 'leave' ,component: ApplyLeaveComponent},
      { path: 'editemployee', component: EditDetailsComponent}
      
     ] }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmployeeRoutingModule { }