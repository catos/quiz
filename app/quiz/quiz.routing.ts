import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent,
  QuizIndexComponent,
  QuizSessionComponent } from './index';

const quizRoutes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    children: [
      { path: '', component: QuizIndexComponent },
      { path: ':id', component: QuizSessionComponent },
    ]
  }
];

export const quizRouting: ModuleWithProviders = RouterModule.forChild(quizRoutes);