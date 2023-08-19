import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor( private http:HttpClient) { }

  saveEmployee(data:any){
    return this.http.post(constant.apiEndPoint.allEmployees,data);
  }

  getEmployees():Observable<any>{
    return this.http.get<any>(constant.apiEndPoint.allEmployees);
  }
}
