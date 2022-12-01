import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss'],
})
export class HomeStudentComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
