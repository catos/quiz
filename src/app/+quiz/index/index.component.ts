import { Component, OnInit } from '@angular/core';
import { Logger } from '../../shared/index';
import { Quiz, QuizService } from '../index';

@Component({
  selector: 'quiz-index',
  templateUrl: 'src/app/+quiz/index/index.component.html',
  styleUrls: ['src/app/+quiz/index/index.component.css']
})

export class QuizIndexComponent implements OnInit {
  quizzes: Quiz[];

  constructor(
    private quizService: QuizService,
    private logger: Logger
    ) { }

  ngOnInit() {
    this.logger.log('Ugh, dette var ikke så smidig akkurat');
    this.quizService.getAllQuizzes().then(
      quizzes => this.quizzes = quizzes
    );
  }
}

