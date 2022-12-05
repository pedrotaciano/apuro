import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from './model/exam';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  exams: Exam[] = this.getExams();

  constructor(private http: HttpClient) {}

  getExamByName(name: string) {
    return this.getExams().find((exam) => exam.name === name);
  }

  getExams() {
    this.http.get('http://localhost:5000/exams/get').subscribe((exams: any) => {
      this.exams = exams;
    });

    return this.exams;
  }

  submitExam(form: any) {
    return this.http.post('http://localhost:5000/correct/exam', form);
  }
}
