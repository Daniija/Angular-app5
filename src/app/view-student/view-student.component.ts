import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'interface/student';
import { StudentService } from 'src/service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  showStudents: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService
      .getAllStudent()
      .subscribe((data) => (this.showStudents = data));
  }

  editStudent(location: string): void {
    this.router.navigate([`edit-student/${location}`]);
    console.log(location);
  }

  getStudent(location: string): void {
    this.router.navigate([`student/${location}`]);
    console.log(location);
  }

  deleteStudent(id: string): void {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        console.log('Student has been deleted');
      },
      error: () => {
        console.log('Error');
      },
      complete: () => {
        this.getAllStudent();
      },
    });
  }
}
