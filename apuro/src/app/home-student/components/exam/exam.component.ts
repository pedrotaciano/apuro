import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExamService } from 'src/app/exam.service';
import { Exam } from 'src/app/model/exam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  id!: any;
  exam!: Exam;
  examForm!: FormGroup;

  constructor(
    private examService: ExamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.getExamById(parseInt(this.id!));
  }

  submitExam(examForm: FormGroup) {
    console.log(examForm);
  }

  getExamById(id: number): Exam {
    return (this.exam = this.examService.getExamById(id));
  }

  getRemainingTime(exam: Exam): number {
    const now = new Date();
    const endDateTime = new Date(exam!.endDateTime);
    const remainingTime = endDateTime.getTime() - now.getTime();
    return remainingTime;
  }
}
