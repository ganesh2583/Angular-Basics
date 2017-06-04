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
var router_1 = require("@angular/router");
var DepartmentComponent = (function () {
    function DepartmentComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "Node Js" },
            { "id": 3, "name": "Mongo DB" },
            { "id": 4, "name": "Spring Boot" }
        ];
    }
    DepartmentComponent.prototype.displayDepartmentDetails = function (department) {
        //this.router.navigate(['departments',department.id]);
        this.router.navigate([department.id], { relativeTo: this.activatedRoute });
    };
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.selectedId = params['id'];
        });
    };
    DepartmentComponent.prototype.departmentSelected = function (departmentId) {
        return this.selectedId == departmentId;
    };
    return DepartmentComponent;
}());
DepartmentComponent = __decorate([
    core_1.Component({
        selector: 'my-department',
        template: "<h2>List of Departments</h2>\n              <ul class=\"items\">\n                <li *ngFor=\"let department of departments\"\n                (click)=\"displayDepartmentDetails(department)\"\n                [class.isSelected] = \"departmentSelected(department.id)\">\n                  <a><span class=\"badge\" [class.isSelected] = \"departmentSelected(department.id)\">{{department.id}}</span> {{department.name}}</a>\n              </ul>\n  ",
        styles: [
            "li.isSelected {\n        color : blue;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], DepartmentComponent);
exports.DepartmentComponent = DepartmentComponent;
//# sourceMappingURL=department.component.js.map