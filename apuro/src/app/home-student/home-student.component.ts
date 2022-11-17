import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss'],
})
export class HomeStudentComponent implements OnInit {
  id: number;
  name: string;
  date: string;
  time: string;
  duration: number;
  subjectCode: string;
  status: boolean;
  constructor() {
    this.id = 1;
    this.name = 'Gestão de Projetos P1';
    this.date = '2022-10-10';
    this.time = '10:00';
    this.duration = 2;
    this.subjectCode = 'ACH2022';
    this.status = false;
  }

  ngOnInit(): void {}
}
