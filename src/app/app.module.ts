import { NgModule }  from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutesModule } from './app-routes.module';
import { routeComponents } from './app-routes.module';

import { AppComponent }  from './app.component';
import { TutorailsComponent }  from './app.tutorial';
import { InputOutputComponent } from './app.inputoutputcomponent';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeInfo } from './app.employeeinfo';
import { EmployeeDetails } from './app.employeeDetails';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  CommonModule,
                  ReactiveFormsModule,
                  HttpModule ,
                  AppRoutesModule,
                  BrowserAnimationsModule
   ],
  declarations: [ AppComponent,
                  TutorailsComponent,
                  InputOutputComponent,
                  EmployeeInfo,
                  EmployeeDetails,
                  routeComponents  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
