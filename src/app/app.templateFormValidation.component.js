"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>
//             <my-tutorail></my-tutorail>
//             Enter value to populate : <input type="text" #appInputData (keyup)="0"/> <br>
//             Value from InputOutputComponent is:{{childData}}
//             <br>
//             <my-input-output (childEvent)="childData=$event" [parentData]=appInputData.value></my-input-output>
//             `,
// })
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent.prototype.userDataFromSubmitted = function (userdata) {
        console.log(userdata);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styles: ["input.ng-invalid {\n            border : 2px solid red;\n            }\n            input.ng-valid {\n              border : 2px solid green;\n            }"
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.templateFormValidation.component.js.map