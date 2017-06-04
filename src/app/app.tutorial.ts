import { Component } from "@angular/core";
import { NgModule } from '@angular/core';

@Component({
  selector: 'my-tutorail',
  template : `<h1 [style.color]="isGreen ? 'green' : 'red' ">Welcome to Tutorails component </h1>
              <div [class.myClass]=applyMyClass>This is class div</div>
              <br>
              <input type="text" #name />
              <button (click) = onclick(name.value)>Click Me</button>
              <input type="text" [(ngModel)]=fname/>
              <input type="text" [(ngModel)]=lname/>
              Full name: {{fname}} {{lname}}
              <p *ngIf="displayPara">This is ngIf para</p>
              <div [ngSwitch]="switchColor">
                <span *ngSwitchCase="'red'">This is red span</span>
                <span *ngSwitchCase="'blue'">This is blue span</span>
                <span *ngSwitchDefault>This is default span</span>
              </div>
              <ul>
                <li *ngFor='let color of allColors'>{{color}}</li>
              </ul>
              `,
  styles : [
    ` .myClass {
      color : blue;
    }`
  ]
})
export class TutorailsComponent {
 imageURL = "http://lorempixel.com/600/200";
 isGreen = true;
 applyMyClass = true;
 onclick(name = "") {
   console.log("clicked",name);
 };
 fname = "";
 lname = "";
 displayPara =false;
 switchColor = "bladsue";
 allColors = ["red","green","blue"];
}
