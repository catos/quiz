import { Quiz } from './index';

const QUIZZES: Quiz[] = [
   { id: 1, name: 'Angular 101', price: 10000, hours: 1 },
   { id: 2, name: 'Cooking with Cato', price: 20000, hours: 2 },
   { id: 3, name: 'Routing and multiple modules in Angular 2', price: 15000, hours: 1 },
];

let quizzesPromise = QUIZZES; // TODO: Promise.resolve(QUIZZES);

export class QuizService {

  getAllQuizzes() {
    return quizzesPromise;
  }
}