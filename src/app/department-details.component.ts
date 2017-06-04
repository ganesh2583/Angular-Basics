import { Component } from '@angular/core'
import { ActivatedRoute,Router,Params } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  template: `<h2>Department detials</h2>
              You have selected the department with id : {{departmentId}}
              <br>
              <a (click)="goToPreviousDepartment()">Previous</a>
              <a (click)="goToNextDepartment()">Next</a>
              <p>
                <button (click)="goToDepartments()">Back</button>
              </p>
  `
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private activatedRoute:ActivatedRoute, private router:Router){}
    // ngOnInit(){
    //     this.departmentId = parseInt(this.activatedRoute.snapshot.params['id']);
    // }
    ngOnInit(){
        this.activatedRoute.params.subscribe((params : Params) => {
          this.departmentId = parseInt(params['id']);
        })
    }
    goToPreviousDepartment(){
        //this.router.navigate(['departments',this.departmentId-1]);
        this.router.navigate(['../',this.departmentId + 1], { relativeTo: this.activatedRoute});
    }
    goToNextDepartment(){
      //this.router.navigate(['departments',this.departmentId+1]);
      this.router.navigate(['../',this.departmentId + 1], { relativeTo: this.activatedRoute});
    }
    goToDepartments(){
    //  this.router.navigate(['departments',{id : this.departmentId}]);
      this.router.navigate(['../',{id : this.departmentId}], { relativeTo: this.activatedRoute});
    }
}
