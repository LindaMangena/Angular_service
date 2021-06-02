import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public errorMsg;
  

  constructor(private _EmployeeService : EmployeeService) { }

  ngOnInit(): void {
  this._EmployeeService.getEmployees().subscribe(data => this.employees = data,  
     error => this.errorMsg = error);
  }

  

}
