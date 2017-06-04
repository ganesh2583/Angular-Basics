"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var InputOutputComponent = (function () {
    function InputOutputComponent() {
        this.childEvent = new core_2.EventEmitter();
    }
    InputOutputComponent.prototype.childEventInputEnters = function (enteredValue) {
        this.childEvent.emit(enteredValue);
    };
    return InputOutputComponent;
}());
InputOutputComponent = __decorate([
    core_1.Component({
        selector: "<my-input-output>",
        template: "\n            Enter value to populate : <input type=\"text\" #childEventInput (keyup)=\"childEventInputEnters(childEventInput.value)\"/> <br>\n            Value from AppComponent is : {{parentData}}\n            <br>\n            ",
        inputs: ['parentData'],
        outputs: ['childEvent']
    })
], InputOutputComponent);
exports.InputOutputComponent = InputOutputComponent;
//# sourceMappingURL=app.inputoutputcomponent.js.map