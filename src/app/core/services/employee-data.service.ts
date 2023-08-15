import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  url = 'http://localhost:3000/employees';

  constructor( private http:HttpClient) { }

  saveEmployee(data:any){
    return this.http.post(this.url,data);
  }

  getEmployees():Observable<any>{
    return this.http.get<any>(this.url);
  }

  uploadImage(imageFile:File){
    const formData = new FormData();
    formData.append('image',imageFile);
    return this.http.post(this.url,formData)
  }
}
