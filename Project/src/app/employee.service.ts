import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  getEmployees(){
    return  [
      {"id":1, "name" : "Andrew" , "age": "30"},
      {"id":1, "name" : "Brandon" , "age": "25"},
      {"id":1, "name" : "Christina" , "age": "26"},
      {"id":1, "name" : "Elena" , "age": "28"}
  ]
  }
}
