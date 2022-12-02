import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from './model/exam';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}

  getExamById(id: number): Exam {
    const exam = this.getExams().find((exam: Exam) => exam.id === id);

    return exam!;
  }

  getExams() {
    return this.http.get('http://localhost:5000/exams/get');
  }

  submitExam(exam: Exam): number {
    // this.http.post('http://localhost:5000/correct/exam').subscribe((exams) => {
    //   console.log(exams);
    //   this.exams = exams;
    // });
    return 1;
  }
}
