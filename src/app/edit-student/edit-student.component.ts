import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'interface/student';
import { StudentService } from 'src/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  studentID: string = this.activatedRoute.snapshot.params['id'];
  studentEdit!: Student;

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
      .subscribe((student) => (this.studentEdit = student));
  }

  editStudent(body: object) {
    this.studentService.updateStudent(this.studentID, body).subscribe({
      next: (res) => {
        console.log(`Student has been updated`);
      },
      error: () => {
        console.log(`Error`);
      },
      complete: () => {
        this.router.navigate(['/view-student']);
      },
    });
  }
}
