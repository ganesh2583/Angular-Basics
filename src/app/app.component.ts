import { Component
        } from '@angular/core'
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'my-app',
  template: `<h2>Angular Animations</h2>
              <button class="btn btn-primary" (click)="toggleOnOff()">Toggle Lights</button>
              <div (@lightsOnOff.start)="animationStarted($event)" (@lightsOnOff.done)="animationFinished($event)" [@lightsOnOff]="roomState"  class="room"></div>
              <button class="btn btn-primary" (click)="toggleHeight()">Toggle Heights</button>
              <div [@heightIncreaseDecrease]="heightState"  class="heightBox" (mouseover)="toggleHeight()">
                <br>
                <br>
                <br>
                <br>
                <br>
              </div>
              <button class="btn btn-primary" (click)="toggleEnterAndLeave()">Toggle Enter and Leave</button>
              <div *ngIf="showDiv" [@showDivEnterAndLeave]> Enter And Leave</div>

  `,
  animations: [
                trigger('lightsOnOff',
                [
                  state('off', style({
                    backgroundColor: 'black'
                  })),
                  state('on', style({
                    backgroundColor: 'white'
                  })),
                  transition('off <-> on',group([
                    animate('2s 2s ease-in', style({transform : 'rotate(90deg)'})),
                    animate('2s 2s ease-in', style({ width : '50px', margin : '50px'}))
                  ])),
                ]),
                trigger('heightIncreaseDecrease',
                [
                  state('noHeight', style({
                    height : 0
                  })),
                  state('fullHeight', style({
                    height : "*"
                  })),
                  transition('noHeight <-> fullHeight',[animate('2s')]),
                ]),
                trigger('showDivEnterAndLeave',[
                  transition(':enter',[
                    animate('1s', keyframes([
                      style({ transform : 'translateX(-100%)', offset : 0, opacity: 0}),
                      style({ transform : 'translateX(15px)', offset : 0.3, opacity: 1}),
                      style({ transform : 'translateX(0)', offset : 1, opacity: 1})
                    ]))
                  ]),
                  transition(':leave',[
                    animate('1s', keyframes([
                      style({ transform : 'translateX(0)', offset : 0, opacity: 0}),
                      style({ transform : 'translateX(-15px)', offset : 0, opacity: 1}),
                      style({ transform : 'translateX(100%)', offset : 0, opacity: 1})
                    ]))
                  ])
                ])

  ]
})
export class AppComponent {
  roomState : string = "off";
  heightState: string = "fullHeight";
  showDiv : boolean = true;
  toggleOnOff(){
      this.roomState = this.roomState === "off" ? "on" : "off";
  }
  animationStarted(event : any){
    //console.log("Started",event);
  }

  animationFinished(event : any){
  //  console.log("Ended",event);
  }

  toggleHeight(){
      this.heightState = this.heightState === "noHeight" ? "fullHeight" : "noHeight";
  }

  toggleEnterAndLeave(){
    this.showDiv = !this.showDiv;
  }
}
