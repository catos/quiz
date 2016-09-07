import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './_layout/start-page.component';

const quizRoutes: Routes = [
  { path: 'quiz', loadChildren: 'app/quiz/quiz.module#QuizModule' }
];

const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  ...quizRoutes
];

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);