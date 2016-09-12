import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Question, Alternative } from '../index';

@Component({
  selector: 'question',
  templateUrl: 'app/quiz/question/question.component.html',
  styleUrls: ['app/quiz/question/question.component.css']
})

export class QuestionComponent {

  @Input() question: Question;
  @Output() answer = new EventEmitter();

  onAnswer(alternative: Alternative) {
    this.answer.emit(alternative);
  }

}