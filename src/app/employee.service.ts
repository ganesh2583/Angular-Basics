import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

private getURL:string = "apidata/employeData.json";
  constructor(private _http: Http){
  }
  getEmployees(){
    return this._http.get(this.getURL)
    .map((response:Response) => response.json())
    .catch(this._errorHadler);
  }
  _errorHadler(error : Response){
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}
