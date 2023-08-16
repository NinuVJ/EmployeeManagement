import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit{
  a:any =[];

constructor(private router :Router){}
 ngOnInit(): void {
 
 }
 logout(){
  localStorage.clear();
 }

}
