import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { EmployeeComponent } from './app.employee';
import { DepartmentDetailsComponent } from './department-details.component';
import { HomePageComponent } from './home-page.component';
//import { PageNotFoundComponent } from './page-not-found.component';

const routes : Routes = [
                          //{path: "", redirectTo : 'departments', pathMatch: 'full'},
                          {path: "departments", component: DepartmentComponent},
                          {path: 'employees', component: EmployeeComponent},
                          {path: 'departments/:id', component: DepartmentDetailsComponent},
                          //{path: "**", component: PageNotFoundComponent}
                        ]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {

}
export const routeComponents = [ DepartmentComponent,
                                 EmployeeComponent,
                                 DepartmentDetailsComponent,
                                 HomePageComponent,
                                 //PageNotFoundComponent
                               ];
