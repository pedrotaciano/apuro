import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../model/exam';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}

  getExamById(id: number) {
    this.getExams().subscribe((exams) => {
      return exams.find((exam) => exam.examId === id);
    });
  }

  getExams() {
    return this.http.get<Exam[]>('http://localhost:5000/exams/get');
  }

  submitExam(form: any) {
    return this.http.post('http://localhost:5000/correct/exam', form);
  }
}
