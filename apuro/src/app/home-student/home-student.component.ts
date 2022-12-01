import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exam } from '../model/exam';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss'],
})
export class HomeStudentComponent implements OnInit {
  //exams: Exam[] = [];
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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.http.get('http://localhost:5000/exams').subscribe((exams) => {
      console.log(exams);
      //this.exams = exams;
    });
  }
}
