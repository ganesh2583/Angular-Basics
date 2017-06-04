"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var department_component_1 = require("./department.component");
var app_employee_1 = require("./app.employee");
var department_details_component_1 = require("./department-details.component");
var home_page_component_1 = require("./home-page.component");
//import { PageNotFoundComponent } from './page-not-found.component';
var routes = [
    //{path: "", redirectTo : 'departments', pathMatch: 'full'},
    { path: "departments", component: department_component_1.DepartmentComponent },
    { path: 'employees', component: app_employee_1.EmployeeComponent },
    { path: 'departments/:id', component: department_details_component_1.DepartmentDetailsComponent },
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    return AppRoutesModule;
}());
AppRoutesModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutesModule);
exports.AppRoutesModule = AppRoutesModule;
exports.routeComponents = [department_component_1.DepartmentComponent,
    app_employee_1.EmployeeComponent,
    department_details_component_1.DepartmentDetailsComponent,
    home_page_component_1.HomePageComponent,
];
//# sourceMappingURL=app-routes.module.js.map