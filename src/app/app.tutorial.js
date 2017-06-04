"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorailsComponent = (function () {
    function TutorailsComponent() {
        this.imageURL = "http://lorempixel.com/600/200";
        this.isGreen = true;
        this.applyMyClass = true;
        this.fname = "";
        this.lname = "";
        this.displayPara = false;
        this.switchColor = "bladsue";
        this.allColors = ["red", "green", "blue"];
    }
    TutorailsComponent.prototype.onclick = function (name) {
        if (name === void 0) { name = ""; }
        console.log("clicked", name);
    };
    ;
    return TutorailsComponent;
}());
TutorailsComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorail',
        template: "<h1 [style.color]=\"isGreen ? 'green' : 'red' \">Welcome to Tutorails component </h1>\n              <div [class.myClass]=applyMyClass>This is class div</div>\n              <br>\n              <input type=\"text\" #name />\n              <button (click) = onclick(name.value)>Click Me</button>\n              <input type=\"text\" [(ngModel)]=fname/>\n              <input type=\"text\" [(ngModel)]=lname/>\n              Full name: {{fname}} {{lname}}\n              <p *ngIf=\"displayPara\">This is ngIf para</p>\n              <div [ngSwitch]=\"switchColor\">\n                <span *ngSwitchCase=\"'red'\">This is red span</span>\n                <span *ngSwitchCase=\"'blue'\">This is blue span</span>\n                <span *ngSwitchDefault>This is default span</span>\n              </div>\n              <ul>\n                <li *ngFor='let color of allColors'>{{color}}</li>\n              </ul>\n              ",
        styles: [
            " .myClass {\n      color : blue;\n    }"
        ]
    })
], TutorailsComponent);
exports.TutorailsComponent = TutorailsComponent;
//# sourceMappingURL=app.tutorial.js.map