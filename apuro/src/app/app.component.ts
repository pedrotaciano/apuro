import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apuro';
  router: string;

  constructor(private _router: Router, private http: HttpClient) {
    this.router = _router.url;
    this.loadExams();
  }

  loadExams() {
    this.http.get('http://localhost:5000/exams').subscribe((data) => {
      console.log(data);
    });
  }
}
