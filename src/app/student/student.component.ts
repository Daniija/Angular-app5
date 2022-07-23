import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'interface/student';
import { StudentService } from 'src/service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentID: string = this.activatedRoute.snapshot.params['id'];
  studentShow!: Student;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService
      .findStudent(this.studentID)
      .subscribe((student) => (this.studentShow = student));
  }

}
