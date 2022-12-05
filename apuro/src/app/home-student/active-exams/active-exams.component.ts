import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/exam.service';
import { Exam } from 'src/app/model/exam';

@Component({
  selector: 'app-active-exams',
  templateUrl: './active-exams.component.html',
  styleUrls: ['./active-exams.component.scss'],
})
export class ActiveExamsComponent implements OnInit {
  exams!: Exam[];

  constructor(public router: Router, private examService: ExamService) {}

  getStartedExams() {
    this.exams = this.examService.exams;
  }

  getRemainingExamTimeInMilliseconds(exam: any): string {
    const now = new Date();
    const endDateTime = new Date(exam.endDateTime);
    const remainingTime = endDateTime.getTime() - now.getTime();
    return remainingTime.toString();
  }

  ngOnInit(): void {
    this.getStartedExams();
  }
}
