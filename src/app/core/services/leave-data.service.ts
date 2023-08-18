import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {

  url = 'http://localhost:3000/leaves';

  constructor( private http:HttpClient) { }

  saveLeave(data:any){
    return this.http.post(this.url,data);
  }

  getLeaves(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
