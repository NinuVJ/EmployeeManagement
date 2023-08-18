import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './hr-dashboard/employee-list/employee-list.component';
import { BarChartComponent } from './hr-dashboard/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './hr-dashboard/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    HrDashboardComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HrRoutingModule,
    CanvasJSAngularChartsModule
  ]
})
export class HrModule { }
