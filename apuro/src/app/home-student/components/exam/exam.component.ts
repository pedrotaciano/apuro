import { Component, Input, OnInit } from '@angular/core';
import { Exam } from 'src/app/model/exam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  exam!: Exam;

  constructor() {}

  ngOnInit(): void {
    this.exam = {
      id: 1,
      name: 'Gestão de Projetos P1',
      subjectCode: 'ACH2022',
      startDateTime: '2022-12-10T13:00:00.000Z',
      endDateTime: '2022-12-10T22:00:00.000Z',
      status: '0',
      questions: [
        {
          id: 1,
          text: 'Qual a capital do Brasil?',
          alternatives: [
            {
              id: 1,
              text: 'São Paulo',
            },
            {
              id: 2,
              text: 'Rio de Janeiro',
            },
            {
              id: 3,
              text: 'Brasília',
            },
            {
              id: 4,
              text: 'Salvador',
            },
          ],
        },
      ],
    };
  }

  getRemainingTime(exam: Exam): number {
    const now = new Date();
    const endDateTime = new Date(exam.endDateTime);
    const remainingTime = endDateTime.getTime() - now.getTime();
    return remainingTime;
  }
}
