import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, of } from 'rxjs';
import { Student } from '../../interface/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private REST_API_URL = 'http://localhost:3000/api';
  private HTTP_HEADER = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllStudent(): Observable<Student[]> {
    return this.http
      .get<Student[]>(`${this.REST_API_URL}`, this.HTTP_HEADER)
      .pipe(
        tap((StudentList) =>
          console.log(`studentList is: ${JSON.stringify(StudentList)}`)
        ),
        catchError((_error) => of([]))
      );
  }

  findStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.REST_API_URL}/find/${id}`).pipe(
      tap((searchedStudent) =>
        console.log(`searchedStudent is :- ${JSON.stringify(searchedStudent)}`)
      ),
      catchError((error) => of())
    );
  }

  createStudent(body: object): Observable<Student> {
    return this.http
      .post<Student>(`${this.REST_API_URL}/create`, body, this.HTTP_HEADER)
      .pipe(
        tap((createdStudent) =>
          console.log(`createdStudent is :- ${JSON.stringify(createdStudent)}`)
        ),
        catchError((error) => of())
      );
  }

  updateStudent(id: string, body: object): Observable<Student> {
    return this.http
      .put<Student>(`${this.REST_API_URL}/update/${id}`, body, this.HTTP_HEADER)
      .pipe(
        tap((updateStudent) =>
          console.log(`updateStudent is :- ${JSON.stringify(updateStudent)}`)
        ),
        catchError((error) => of())
      );
  }

  deleteStudent(id: string): Observable<Student> {
    return this.http.delete<Student>(`${this.REST_API_URL}/remove/${id}`).pipe(
      tap((deleteStudent) =>
        console.log(`deleteStudent is :- ${JSON.stringify(deleteStudent)}`)
      ),
      catchError((error) => of())
    );
  }
}
