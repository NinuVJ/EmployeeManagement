import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeeListComponent } from './hr-dashboard/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { authenticationGuard } from '../core/guards/authentication.guard';

const routes: Routes = [

  {path:'hr', component: HrDashboardComponent, canActivate: [authenticationGuard],
   children:[
    { path:'', component: EmployeeListComponent},
    { path:'dashboard', component: EmployeeListComponent},
    { path: 'details' ,component: EmployeeDetailsComponent},
    { path: 'addemployee', component: AddEmployeeComponent}
   ] 
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HrRoutingModule { }