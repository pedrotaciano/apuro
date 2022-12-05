import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';
import { Exam } from '../model/exam';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss'],
})
export class HomeStudentComponent implements OnInit {
  exams: Exam[] = [];

  constructor(public router: Router, private examService: ExamService) {}

  ngOnInit(): void {
    this.getNonStartedExams();
  }

  getNonStartedExams() {
    this.exams = this.examService.exams;
    // this.exams = this.exams.filter((exam) => exam.status === '0');
  }
}
