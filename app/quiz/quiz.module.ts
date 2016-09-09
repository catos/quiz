import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OreToKronePipe } from '../common/ore-to-krone.pipe';
import { Logger } from '../common/logger.service';

import {
  Quiz, Question, Alternative,

  QuizService,

  QuizComponent,
  QuizIndexComponent,
  QuizSessionComponent,
  QuestionComponent
} from './index';

import { quizRouting } from './quiz.routing';

@NgModule({
  declarations: [
    QuizComponent,
    QuizIndexComponent,
    QuizSessionComponent,
    QuestionComponent,
    OreToKronePipe
  ],
  imports: [
    CommonModule,
    quizRouting
  ],
  providers: [
    QuizService,
    Logger
  ]
})

export class QuizModule { }