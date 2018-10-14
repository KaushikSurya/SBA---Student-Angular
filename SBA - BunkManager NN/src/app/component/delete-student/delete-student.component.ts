import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  student : Student;
  femaleLogo : string;
  maleLogo : string;

  constructor(private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router : Router) {
      this.femaleLogo = "/assets/Images/female.png";
      this.maleLogo = "/assets/Images/male.png";
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let sid = params['id'];
        if (sid) {
          this.studentService.getStudentById(sid).subscribe(
            (data) => this.student = data
          );
        }
      }
    );
  }

  doDelete(isConfirmed:boolean){
    if(isConfirmed){
      this.studentService.deleteStudentById(this.student.id).subscribe(
        (resp) =>{
          if(resp.ok){
            this.router.navigateByUrl("/?opt=d&id="+this.student.id);
          }
        }
      );
    }else{
      this.router.navigateByUrl("/");
    }
  }

}
