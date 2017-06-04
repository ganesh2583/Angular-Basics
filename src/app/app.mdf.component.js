"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import {TutorailsComponent} from './app.tutorial';
// import { InputOutputComponent } from './app.inputoutputcomponent';
var forms_1 = require("@angular/forms");
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
        this.userData = new forms_1.FormGroup({
            name: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]),
            email: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(),
                city: new forms_1.FormControl(),
                pincode: new forms_1.FormControl()
            })
        });
    }
    AppComponent.prototype.userDataSubmitted = function () {
        console.log("User data is", this.userData);
        console.log("User data is value is ", this.userData.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styles: ["\n      input.ng-invalid{\n        border : solid 2px red;\n      }\n      input.ng-valid{\n        border : solid 2px green;\n      }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.mdf.component.js.map