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
  templateUrl: 'app/quiz/session/session.component.html',
  styleUrls: ['app/quiz/session/session.component.css']
})
export class QuizSessionComponent implements OnInit {
  timeoutId: any;

  score: number;
  scorePercent: number;
  totalScore: number;
  state: SessionState;
  message: string;
  messageClass: string;

  quiz: Quiz;
  currentQuestionId: number = 0;
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
    this.currentQuestionId = 0;
    this.currentQuestion = this.quiz.questions[this.currentQuestionId];
    this.state = SessionState.NotStarted;
  }

  start() {
    this.reset();
    this.state = SessionState.InProgress;
  }

  answer(alternative: Alternative) {
    this.currentQuestionId++;
    console.log('this.currentQuestionId: ' + this.currentQuestionId);


    if (alternative.id === this.currentQuestion.solution) {
      this.showMessage('Correct, nice work!');
      this.score++;
      this.scorePercent = Math.floor((this.score / this.totalScore) * 100);
    } else {
      this.showMessage('Not correct...', 'danger');
    }

    if (this.currentQuestionId >= this.quiz.questions.length) {
      this.showMessage('Quiz is finished. Click Reset-button if you would like to go again.', 'success');
      this.state = SessionState.Finished;
    } else {
      this.currentQuestion = this.quiz.questions[this.currentQuestionId];
    }
  }

  showMessage(message: string, type: string = 'info') {
    var self = this;
    self.message = message;
    self.messageClass = 'alert alert-' + type;

    window.clearTimeout(self.timeoutId);
    self.timeoutId = setTimeout(function () {
      self.message = '';
    }, 3000);
  }

  showQuestion() {
    return this.state === SessionState.InProgress;
  }

  showStartButton() {
    return this.state === SessionState.NotStarted;
  }

  showResetButton() {
    return this.state === SessionState.Finished;
  }
}