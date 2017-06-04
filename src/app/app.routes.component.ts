import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h2>Routing Application</h2>
              <nav>
              <a routerLink="/departments">Departments List</a>
              <a routerLink="/employees">Employee List</a>
              </nav>
              <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
