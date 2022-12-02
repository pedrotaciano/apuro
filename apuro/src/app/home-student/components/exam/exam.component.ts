import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExamService } from 'src/app/exam.service';
import { UserService } from 'src/app/user.service';
import { Exam, QuestionResponse } from 'src/app/model/exam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  id!: any;
  exam!: Exam;
  answer: QuestionResponse[] = [];
  examForm!: FormGroup;
  index: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private examService: ExamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setCurrentExam();

    this.examForm = this.formBuilder.group({
      alternative: [''],
    });
  }

  submitExam() {
    let answer: QuestionResponse = {
      questionId: this.exam.questions[this.index].id,
      selectedAlternativeId: this.examForm.value.alternative,
    };
    this.answer.push(answer);
    this.index += 1;
    //const formData = new FormData();
    //formData.append(
    //'selectedAlternative',
    console.log('selected:', this.examForm?.controls['alternative'].value);
    //);

    //this.examService.submitExam(formData);
  }

  setCurrentExam() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.getExamById(parseInt(this.id!));
  }

  getExamById(id: number) {
    return this.examService.getExamById(id);
  }

  getRemainingTime(exam: Exam): number {
    const now = new Date();
    const endDateTime = new Date(exam!.endDateTime);
    const remainingTime = endDateTime.getTime() - now.getTime();
    return remainingTime;
  }
}
