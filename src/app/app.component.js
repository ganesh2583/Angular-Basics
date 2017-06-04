"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var AppComponent = (function () {
    function AppComponent() {
        this.roomState = "off";
        this.heightState = "fullHeight";
        this.showDiv = true;
    }
    AppComponent.prototype.toggleOnOff = function () {
        this.roomState = this.roomState === "off" ? "on" : "off";
    };
    AppComponent.prototype.animationStarted = function (event) {
        //console.log("Started",event);
    };
    AppComponent.prototype.animationFinished = function (event) {
        //  console.log("Ended",event);
    };
    AppComponent.prototype.toggleHeight = function () {
        this.heightState = this.heightState === "noHeight" ? "fullHeight" : "noHeight";
    };
    AppComponent.prototype.toggleEnterAndLeave = function () {
        this.showDiv = !this.showDiv;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h2>Angular Animations</h2>\n              <button class=\"btn btn-primary\" (click)=\"toggleOnOff()\">Toggle Lights</button>\n              <div (@lightsOnOff.start)=\"animationStarted($event)\" (@lightsOnOff.done)=\"animationFinished($event)\" [@lightsOnOff]=\"roomState\"  class=\"room\"></div>\n              <button class=\"btn btn-primary\" (click)=\"toggleHeight()\">Toggle Heights</button>\n              <div [@heightIncreaseDecrease]=\"heightState\"  class=\"heightBox\" (mouseover)=\"toggleHeight()\">\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n              </div>\n              <button class=\"btn btn-primary\" (click)=\"toggleEnterAndLeave()\">Toggle Enter and Leave</button>\n              <div *ngIf=\"showDiv\" [@showDivEnterAndLeave]> Enter And Leave</div>\n\n  ",
        animations: [
            animations_1.trigger('lightsOnOff', [
                animations_1.state('off', animations_1.style({
                    backgroundColor: 'black'
                })),
                animations_1.state('on', animations_1.style({
                    backgroundColor: 'white'
                })),
                animations_1.transition('off <-> on', animations_1.group([
                    animations_1.animate('2s 2s ease-in', animations_1.style({ transform: 'rotate(90deg)' })),
                    animations_1.animate('2s 2s ease-in', animations_1.style({ width: '50px', margin: '50px' }))
                ])),
            ]),
            animations_1.trigger('heightIncreaseDecrease', [
                animations_1.state('noHeight', animations_1.style({
                    height: 0
                })),
                animations_1.state('fullHeight', animations_1.style({
                    height: "*"
                })),
                animations_1.transition('noHeight <-> fullHeight', [animations_1.animate('2s')]),
            ]),
            animations_1.trigger('showDivEnterAndLeave', [
                animations_1.transition(':enter', [
                    animations_1.animate('1s', animations_1.keyframes([
                        animations_1.style({ transform: 'translateX(-100%)', offset: 0, opacity: 0 }),
                        animations_1.style({ transform: 'translateX(15px)', offset: 0.3, opacity: 1 }),
                        animations_1.style({ transform: 'translateX(0)', offset: 1, opacity: 1 })
                    ]))
                ]),
                animations_1.transition(':leave', [
                    animations_1.animate('1s', animations_1.keyframes([
                        animations_1.style({ transform: 'translateX(0)', offset: 0, opacity: 0 }),
                        animations_1.style({ transform: 'translateX(-15px)', offset: 0, opacity: 1 }),
                        animations_1.style({ transform: 'translateX(100%)', offset: 0, opacity: 1 })
                    ]))
                ])
            ])
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map