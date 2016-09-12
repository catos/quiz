import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const quizRoutes: Routes = [
  { path: 'quiz', loadChildren: 'src/app/quiz/quiz.module#QuizModule' }
];

const appRoutes: Routes = [
  // { path: '', component: StartPageComponent },
  ...quizRoutes
];

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);