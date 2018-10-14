import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  
  student:Student;
  isEditing:boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private studentService:StudentService,
    private router:Router
  ) { }

  ngOnInit() {
    this.student=new Student();
    this.isEditing=false;

    this.activatedRoute.params.subscribe(
      (params)=>{
        let sid = params['id'];
        if(sid){
          this.studentService.getStudentById(sid).subscribe(
            (data)=>{
              this.student=data;
              this.isEditing=true;
            }
          );
        }
      }
    );
  }

  save(){
    if(this.isEditing){
      this.studentService.updateStudent(this.student).subscribe(
        (data)=>{
          this.router.navigateByUrl("/?opt=u&id="+this.student.id);
        },
        (error)=>{alert("This id already exist");}
      );
    }else{
      this.studentService.addStudent(this.student).subscribe(
        (data)=>{
          this.router.navigateByUrl("/?opt=a&id="+data.id);
        },
        (error)=>{alert("This id already exist");}
      );
    }
  }

}