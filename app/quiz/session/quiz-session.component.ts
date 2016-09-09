import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quiz, Question, Alternative, QuizService } from '../index';

export enum SessionState {
  NotStarted = 1,
  InProgress = 2,
  Finished = 3
}

@Component({
  selector: 'quiz-session',
  templateUrl: 'app/quiz/session/quiz-session.component.html'
})
export class QuizSessionComponent implements OnInit {
  // TODO: do i really need to prepend Quiz to the components ?
  // TODO: test and fix score
  score: number;
  scorePercent: number;
  totalScore: number;
  state: SessionState;

  quiz: Quiz;
  currentQuestion: Question = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.quizService.getQuiz(id).then(quiz => {
        this.quiz = quiz;
        this.reset();
      });
    });
  }

  reset() {
    this.score = 0;
    this.scorePercent = 0;
    this.totalScore = this.quiz.questions.length;
    this.currentQuestion = null;
    this.state = SessionState.NotStarted;
  }

  startQuiz() {
    this.reset();
    this.currentQuestion = this.quiz.questions[0];
    this.state = SessionState.InProgress;
  }

  answer(alternative: Alternative) {
    if (alternative.id === this.currentQuestion.solution) {
      let nextId = this.currentQuestion.id++;
      if (nextId >= this.quiz.questions.length) {
        // TODO -> vis melding
        console.log('finished!');
        this.state = SessionState.Finished;
      } else {
        this.currentQuestion = this.quiz.questions[nextId];
        this.score++;
        this.scorePercent = Math.floor((this.score / this.totalScore) * 100);
      }
    } else {
      // TODO -> vis melding
      console.log('not correct!');
    }
  }

  showStartButton() {
    return this.state === SessionState.NotStarted;
  }

  showResetButton() {
    return this.state === SessionState.Finished;
  }
}