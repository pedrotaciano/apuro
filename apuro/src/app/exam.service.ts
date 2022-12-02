import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from './model/exam';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  exams: Exam[] = [];

  constructor(private http: HttpClient) {}

  getExamById(id: number) {
    return this.exams.find((exam) => exam.id === id);
  }

  getExams(): void {
    this.http.get('http://localhost:5000/exams/get').subscribe((exams: any) => {
      this.exams = exams;
    });
  }

  submitExam(form: any) {
    return this.http.post('http://localhost:5000/correct/exam', form);
  }
}
