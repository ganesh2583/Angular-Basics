"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var app_routes_module_1 = require("./app-routes.module");
var app_routes_module_2 = require("./app-routes.module");
var app_component_1 = require("./app.component");
var app_tutorial_1 = require("./app.tutorial");
var app_inputoutputcomponent_1 = require("./app.inputoutputcomponent");
var common_1 = require("@angular/common");
var forms_2 = require("@angular/forms");
var app_employeeinfo_1 = require("./app.employeeinfo");
var app_employeeDetails_1 = require("./app.employeeDetails");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            app_routes_module_1.AppRoutesModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [app_component_1.AppComponent,
            app_tutorial_1.TutorailsComponent,
            app_inputoutputcomponent_1.InputOutputComponent,
            app_employeeinfo_1.EmployeeInfo,
            app_employeeDetails_1.EmployeeDetails,
            app_routes_module_2.routeComponents],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map