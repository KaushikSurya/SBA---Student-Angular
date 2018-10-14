import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = "http://localhost:2020/students";
   }

   getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  searchStudents(field: string, value: string): Observable<Student[]> {
    return this.http.get(this.getSearchUrl(field,value)).pipe(
      map(data => data.json())
    );
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }

  deleteStudentById(id: number): Observable<Response> {
    return this.http.delete(this.getBaseUrlById(id));
  }

  addStudent(Student: Student): Observable<Student> {
    return this.http.post(this.baseUrl, JSON.stringify(Student), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  updateStudent(Student: Student): Observable<Student> {
    return this.http.put(this.baseUrl, JSON.stringify(Student), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }
}
