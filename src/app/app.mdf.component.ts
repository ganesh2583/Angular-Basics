import { Component } from '@angular/core';
// import {TutorailsComponent} from './app.tutorial';
// import { InputOutputComponent } from './app.inputoutputcomponent';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  styles: [`
      input.ng-invalid{
        border : solid 2px red;
      }
      input.ng-valid{
        border : solid 2px green;
      }
    `]
})
export class AppComponent  {
  public userData = new FormGroup({
    name : new FormControl(null, [Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email : new FormControl(),
    address : new FormGroup({
      street : new FormControl(),
      city : new FormControl(),
      pincode : new FormControl()
    })
  });
  public userDataSubmitted(){
    console.log("User data is",this.userData);
    console.log("User data is value is ",this.userData.value);
  }
}
