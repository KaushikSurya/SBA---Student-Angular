import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;
  femaleLogo: string;
  maleLogo: string;
  constructor(private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {
  this.femaleLogo = "/assets/Images/female.png";
    this.maleLogo = "/assets/Images/male.png";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let eId = params['id'];
        if (eId) {
          this.studentService.getStudentById(eId).subscribe(
            (data) => this.student = data
          );
        }
      }
    );
  }

}