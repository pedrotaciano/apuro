import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.scss'],
})
export class ExamCardComponent implements OnInit {
  @Input() id!: string;
  @Input() name!: string;
  @Input() subjectCode!: string;
  @Input() startDateTime!: string;
  @Input() endDateTime!: string;
  @Input() status!: boolean;
  @Input() ctaText!: string;

  constructor() {}

  ngOnInit(): void {}
}
