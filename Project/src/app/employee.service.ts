import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput} from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _url : string = "/assets/data/employees.json"

  constructor(private Http :HttpClient ) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return  this.Http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));

    }
    
    errorHandler(error : HttpErrorResponse){
      return Observable.throw(error.message || "server error")

    }

}
