import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizService } from './index';
import { QuizComponent, QuizIndexComponent, QuizSessionComponent } from './index';

import { quizRouting } from './quiz.routing';

@NgModule({
  declarations: [
    QuizComponent,
    QuizIndexComponent,
    QuizSessionComponent
  ],
  imports: [
    CommonModule,
    quizRouting
  ],
  providers: [
    QuizService
  ]
})

export class QuizModule {}