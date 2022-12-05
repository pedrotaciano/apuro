import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExamService } from 'src/app/exam.service';
import { UserService } from 'src/app/user.service';
import { Exam, Answers } from 'src/app/model/exam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  exam: Exam = {
    id: 0,
    name: 'GPTI - P1',
    subjectCode: 'ACH2022',
    startDateTime: '01/12/2022 20:00:00',
    endDateTime: '01/12/2022 23:00:00',
    status: 'In Progress',
    questions: [
      {
        id: 0,
        text: 'Qual a capital do Brasil?',
        alternatives: [
          { id: 0, text: 'São Paulo' },
          { id: 1, text: 'Rio de Janeiro' },
          { id: 2, text: 'Brasília' },
          { id: 3, text: 'Salvador' },
        ],
      },
    ],
  };

  answer: Answers[] = [];
  examForm!: FormGroup;
  index: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private examService: ExamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setCurrentExam();

    this.examForm = this.formBuilder.group({
      alternative: [''],
    });
  }

  setCurrentExam() {
    this.route.paramMap.subscribe((params: ParamMap) => {});

    this.getExamByName(this.exam.id);
  }

  getExamByName(id: number) {
    return this.exam;
  }

  submitExam() {
    let answer: Answers = {
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
    this.router.navigate(['result/1']);
  }

  getRemainingTime(exam: Exam): number {
    const now = new Date();
    const endDateTime = new Date(exam!.endDateTime);
    const remainingTime = endDateTime.getTime() - now.getTime();
    return remainingTime;
  }
}
