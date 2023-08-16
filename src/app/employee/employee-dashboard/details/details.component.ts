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
export class DetailsComponent implements OnInit {

  employee: any;
  thumbnail: any;
  userId: any;

  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer,
    private loginService: LoginService, private login: LoginComponent) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    const userData = localStorage.getItem('localUserData');
    if (userData != null) {
      this.employee = JSON.parse(userData);
    }
  }
}
