import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {

  constructor( private http:HttpClient) { }

  saveLeave(data:any){
    return this.http.post(constant.apiEndPoint.allLeaves,data);
  }

  getLeaves(): Observable<any> {
    return this.http.get<any>(constant.apiEndPoint.allLeaves);
  }
}
