import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  addStudent(body: Object): void {
    this.studentService.createStudent(body).subscribe({
      next: (res) => {
        console.log(`hello ${JSON.stringify(res)}`);
      },
      error: () => {
        console.log(`Error`);
      },
      complete: () => {
        alert(`Added Successfully`);
      },
    });
  }
}
