import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../../../core/services/login.service';
import { LoginComponent } from '../../../home/login/login.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  employee: any;
  thumbnail: any;
  userId: any;

  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer,
    private loginService: LoginService, private login: LoginComponent) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }


  getEmployeeDetails() {
    // this.userId = this.login.userId;
    this.http.get('http://localhost:3000/employees/2').subscribe(details => {
      this.employee = details;
    })
  }

}
