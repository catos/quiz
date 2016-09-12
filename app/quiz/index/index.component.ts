import { Component, OnInit } from '@angular/core';

import { Quiz, QuizService } from '../index';

@Component({
  selector: 'quiz-index',
  templateUrl: 'app/quiz/index/index.component.html'
})

export class QuizIndexComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    console.log('lol?');
    this.quizService.getAllQuizzes().then(
      quizzes => this.quizzes = quizzes
    );
  }
}

