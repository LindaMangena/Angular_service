import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _url : string = "/assets/data/employees.json"

  constructor(private Http :HttpClient ) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return  this.Http.get<IEmployee[]>(this._url)
  }
}
