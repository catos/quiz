import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quiz, QuizService } from '../index';

@Component({
  selector: 'quiz-session',
  templateUrl: 'app/quiz/session/quiz-session.component.html'
})

export class QuizSessionComponent implements OnInit {
  quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      console.log('id', id);
      this.quizService.getQuiz(id).then(
        quiz => this.quiz = quiz
      );
    });

  }
}