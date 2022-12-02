import { Component, OnInit, Input } from '@angular/core';
import { Alternative } from 'src/app/model/exam';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() index!: any;
  @Input() id!: number;
  @Input() text!: string;
  @Input() alternatives!: Alternative[];

  constructor() {}

  ngOnInit(): void {}
}
