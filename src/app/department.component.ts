import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'my-department',
  template: `<h2>List of Departments</h2>
              <ul class="items">
                <li *ngFor="let department of departments"
                (click)="displayDepartmentDetails(department)"
                [class.isSelected] = "departmentSelected(department.id)">
                  <a><span class="badge" [class.isSelected] = "departmentSelected(department.id)">{{department.id}}</span> {{department.name}}</a>
              </ul>
  `,
  styles: [
    `li.isSelected {
        color : blue;
    }`
  ]
})
export class DepartmentComponent implements OnInit {
  public selectedId;
  constructor(private router : Router, private activatedRoute : ActivatedRoute){}
  departments = [
      { "id":1, "name": "Angular"},
      { "id":2, "name": "Node Js"},
      { "id":3, "name": "Mongo DB"},
      { "id":4, "name": "Spring Boot"}
  ]
  displayDepartmentDetails(department){
      //this.router.navigate(['departments',department.id]);
      this.router.navigate([department.id], {relativeTo : this.activatedRoute});
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe((params : Params) => {
      this.selectedId = params['id'];
    })
  }
  departmentSelected(departmentId){
    return this.selectedId == departmentId;
  }
}
