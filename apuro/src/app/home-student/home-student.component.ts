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
      date: '2022-10-10',
      time: '12:00',
      duration: '1',
      subjectCode: 'ACH2022',
      Status: 'STARTED',
    },
    {
      id: 2,
      name: 'Gestão de Projetos P2',
      date: '2022-10-10',
      time: '12:00',
      duration: '1',
      subjectCode: 'ACH2022',
      Status: 'STARTED',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
