import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';
import { Exam } from '../model/exam';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss'],
})
export class HomeTeacherComponent implements OnInit {
  exams: Exam[] = [];

  constructor(public router: Router, private examService: ExamService) {}

  ngOnInit(): void {
    this.getNonStartedExams();
  }

  getNonStartedExams() {
    this.examService.getExams();
    this.exams = this.exams.filter((exam) => exam.status === '0');
  }
}
