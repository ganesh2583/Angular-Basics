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
var DepartmentDetailsComponent = (function () {
    function DepartmentDetailsComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    // ngOnInit(){
    //     this.departmentId = parseInt(this.activatedRoute.snapshot.params['id']);
    // }
    DepartmentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.departmentId = parseInt(params['id']);
        });
    };
    DepartmentDetailsComponent.prototype.goToPreviousDepartment = function () {
        //this.router.navigate(['departments',this.departmentId-1]);
        this.router.navigate(['../', this.departmentId + 1], { relativeTo: this.activatedRoute });
    };
    DepartmentDetailsComponent.prototype.goToNextDepartment = function () {
        //this.router.navigate(['departments',this.departmentId+1]);
        this.router.navigate(['../', this.departmentId + 1], { relativeTo: this.activatedRoute });
    };
    DepartmentDetailsComponent.prototype.goToDepartments = function () {
        //  this.router.navigate(['departments',{id : this.departmentId}]);
        this.router.navigate(['../', { id: this.departmentId }], { relativeTo: this.activatedRoute });
    };
    return DepartmentDetailsComponent;
}());
DepartmentDetailsComponent = __decorate([
    core_1.Component({
        template: "<h2>Department detials</h2>\n              You have selected the department with id : {{departmentId}}\n              <br>\n              <a (click)=\"goToPreviousDepartment()\">Previous</a>\n              <a (click)=\"goToNextDepartment()\">Next</a>\n              <p>\n                <button (click)=\"goToDepartments()\">Back</button>\n              </p>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DepartmentDetailsComponent);
exports.DepartmentDetailsComponent = DepartmentDetailsComponent;
//# sourceMappingURL=department-details.component.js.map