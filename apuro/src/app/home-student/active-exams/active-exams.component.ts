import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-exams',
  templateUrl: './active-exams.component.html',
  styleUrls: ['./active-exams.component.scss'],
})
export class ActiveExamsComponent implements OnInit {
  exams = [
    {
      id: 1,
      name: 'Gestão de Projetos P1',
      subjectCode: 'ACH2022',
      startDateTime: '2022-12-10T13:00:00.000Z',
      endDateTime: '2022-12-10T22:00:00.000Z',
      status: '0',
    },
    {
      id: 2,
      name: 'Gestão de Projetos P2',
      subjectCode: 'ACH2022',
      startDateTime: '2022-12-10T13:00:00.000Z',
      endDateTime: '2022-12-10T22:00:00.000Z',
      status: '1',
    },
  ];

  getRemainingExamTimeInMilliseconds(exam: any): string {
    const now = new Date();
    const endDateTime = new Date(exam.endDateTime);
    const remainingTime = endDateTime.getTime() - now.getTime();
    return remainingTime.toString();
  }

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
