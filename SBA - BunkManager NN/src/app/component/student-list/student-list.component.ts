import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  students : Student[];
  maleLogo : string;
  femaleLogo : string;
  othersLogo : string;
  cselogo : string;
  ecelogo : string;
  mechlogo : string;
  civillogo : string;
  itlogo : string;
  eeelogo:string;
  sortby:string;
  isDesc:boolean=false;
  msg : string;

  constructor(
    private studentService : StudentService, 
    private activatedRoute : ActivatedRoute) 
    {
      this.maleLogo="assets/Images/male.png";
      this.femaleLogo="assets/Images/female.png";
      this.othersLogo="assets/Images/others.png";
      this.cselogo="/assets/Images/cse.png";
      this.ecelogo="/assets/Images/ece.png";
      this.mechlogo="/assets/Images/mech.png";
      this.civillogo="/assets/Images/civil.png";
      this.itlogo="/assets/Images/it.png";
      this.eeelogo="/assets/Images/eee.png";
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let field = params['field'];
        let srchValue = params['srchValue'];
        let value = params['value'];

        console.log(field +" : "+srchValue);
        console.log(field +" : "+value);

        if(field && srchValue){
          this.studentService.searchStudents(field,srchValue).subscribe(
            (data) => this.students=data,
            (err)=>this.students=undefined
          );
        }else{
          this.studentService.getAllStudents().subscribe(
            (data) => this.students=data,
            (err)=>this.students=undefined
          );
        }
      }
    );
    this.activatedRoute.params.subscribe(
      (params) => {
        let sf = params['field'];
        let sv = params['value']
        if (sf && sv) {
          this.studentService.searchStudents(sf,sv).subscribe(
            (data) => this.students=data,
            (err)=>this.students=undefined
          );
        }
      }
    )
  }
  order() {
    if(this.isDesc)
      this.isDesc=false;
    else
      this.isDesc=true;
  }
}