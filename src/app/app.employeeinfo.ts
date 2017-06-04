import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-info',
  template:`
<h3>{{serverError}}</h3>
  <ul *ngFor="let emp of employee">
              <li>{{emp.name}}</li>
            </ul>
  `
})
export class EmployeeInfo {
 employee = [];
 serverError : string;
 constructor(private _employeeService : EmployeeService){}
 ngOnInit(){
   this._employeeService.getEmployees().subscribe(resEmpData => this.employee = resEmpData,
   resError => this.serverError = resError);
 }
}
