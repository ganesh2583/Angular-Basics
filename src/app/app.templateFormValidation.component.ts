import { Component } from '@angular/core';
import {TutorailsComponent} from './app.tutorial';
import { InputOutputComponent } from './app.inputoutputcomponent';

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
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [ `input.ng-invalid {
            border : 2px solid red;
            }
            input.ng-valid {
              border : 2px solid green;
            }`
          ]
})
export class AppComponent  {
  public name = 'Angular';
  public childData:string;
  userDataFromSubmitted(userdata : any){
    console.log(userdata);
  }
}
