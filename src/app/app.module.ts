import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { HrModule } from './hr/hr.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginComponent } from './home/login/login.component';
import { DetailsComponent } from './employee/employee-dashboard/details/details.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HrModule,
    EmployeeModule,
    CoreModule,
    HomeModule
  ],
  providers: [LoginComponent,
    DetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
