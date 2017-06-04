"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeInfo = (function () {
    function EmployeeInfo(_employeeService) {
        this._employeeService = _employeeService;
        this.employee = [];
    }
    EmployeeInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (resEmpData) { return _this.employee = resEmpData; }, function (resError) { return _this.serverError = resError; });
    };
    return EmployeeInfo;
}());
EmployeeInfo = __decorate([
    core_1.Component({
        selector: 'employee-info',
        template: "\n<h3>{{serverError}}</h3>\n  <ul *ngFor=\"let emp of employee\">\n              <li>{{emp.name}}</li>\n            </ul>\n  "
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeInfo);
exports.EmployeeInfo = EmployeeInfo;
//# sourceMappingURL=app.employeeinfo.js.map