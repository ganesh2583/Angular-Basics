import { Component } from "@angular/core";
import { EmployeeService } from './employee.service';

@Component({
  selector: 'emp-detials',
  template: `
<h3>{{serverError}}</h3>
  <ul *ngFor="let emp of employee">
              <li>{{emp.id}} {{emp.name}} {{emp.gender}}</li>
            </ul>
            `
})
export class EmployeeDetails {
  employee = [];
  serverError : string;
  constructor(private _employeeService : EmployeeService ){
  }
  ngOnInit(){
    this._employeeService.getEmployees().subscribe(resEmpData => this.employee = resEmpData,
      resError => this.serverError = resError);
  }
}
