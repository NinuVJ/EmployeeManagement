import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit{
  a:any =[];

 ngOnInit(): void {
  // this.a = document.getElementsByClassName("list-group-item ");;
  // if(this.a.click) {
  //   // (this.a).addClass('active-link');
  //   (this.a).removeClass('active-link');

  //  }
 }

}
