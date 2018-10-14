import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string;
  logoUrl: string;
  femaleLogo: string;
  maleLogo: string;
  othersLogo : string;
  students: Student[];
  cselogo:string;
  ecelogo:string;
  mechlogo : string;
  civillogo : string;
  itlogo : string;
  eeelogo:string;
  msg : string;
  field : string = "branch";
  srchValue : string;
  constructor(private studentService:StudentService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {
    this.title = "Bunk Manager";
    this.logoUrl = "/assets/Images/student.png"; 
    this.femaleLogo = "/assets/Images/female.png";
    this.maleLogo = "/assets/Images/male.png";
    this.othersLogo = "/assets/Images/others.png";
    this.cselogo="/assets/Images/cse.png";
    this.ecelogo="/assets/Images/ece.png";
    this.mechlogo="/assets/Images/mech.png";
    this.civillogo="/assets/Images/civil.png";
    this.itlogo="/assets/Images/it.png";
    this.eeelogo="/assets/Images/eee.png";
  }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(
      (data) => this.students = data
    );
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        let sId=params['id'];
        let operation=params['opt'];
        if(sId && operation){
          this.msg = "Student # "+sId + " is successfully "+
          (operation=='d'?'Deleted':(operation=='a'?'added':'updated'));
          
        }else{
          this.msg=undefined;
        }
      }
    );
  }
}