import { Component } from '@angular/core';
import {EmployeeInfo} from './app.employeeinfo';
import {EmployeeDetails} from './app.employeeDetails';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  template: `Employee App Component
              <employee-info></employee-info>
              <emp-detials></emp-detials>
  `,
  providers: [ EmployeeService ]
})
export class AppComponent {

}
