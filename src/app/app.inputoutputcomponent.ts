import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: "<my-input-output>",
  template: `
            Enter value to populate : <input type="text" #childEventInput (keyup)="childEventInputEnters(childEventInput.value)"/> <br>
            Value from AppComponent is : {{parentData}}
            <br>
            `,
  inputs: ['parentData'],
  outputs: ['childEvent']
})
export class InputOutputComponent {
  public childEvent = new EventEmitter();
  childEventInputEnters(enteredValue:string){
    this.childEvent.emit(enteredValue);
  }
}
