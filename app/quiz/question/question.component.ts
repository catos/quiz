import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Question, Alternative } from '../index';

@Component({
  selector: 'question',
  templateUrl: 'app/quiz/question/question.component.html',
  // TODO: put styles in separate file
  styles: [`
    .text {
      font-size: 1.5em;
    }

    .question ul {
    }

    .question ul li {
      padding: 3px 0;
      cursor: pointer;
      font-size: 1.2em;
    }

    .question ul li:hover {
      color: #999;
    }
  `]
})

export class QuestionComponent {

  @Input() question: Question;
  @Output() answer = new EventEmitter();

  onAnswer(alternative: Alternative) {
    this.answer.emit(alternative);
  }

}