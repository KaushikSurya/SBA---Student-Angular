import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  logoUrl: string;
  field:string="name";
  srchValue:string="";

  constructor(private router:Router){
    this.title="Student";
    this.logoUrl="/assets/Images/student.png";
  }

  doSearch(){
    this.router.navigate(["/listStudents"],{queryParams:{field:this.field,srchValue:this.srchValue}});
  }

  doChangeField(field,ele){
    this.field=field;
    this.srchValue="";
    switch(field){
      case 'name': ele.placeholder="Name";ele.type="text"; break;
      case 'branch': ele.placeholder="Branch"; ele.type="text";break;
    }
  }
}
