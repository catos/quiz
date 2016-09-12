import { Quiz } from './index';

export class QuizService {

  constructor() {}

  getAllQuizzes() {
    return quizzesPromise;
  }

  getQuiz(id: number) {
    return quizzesPromise.
      then(quizzes => quizzes.find(quiz => quiz.id === id));
  }
}

const QUIZZES: Quiz[] = [
  {
    id: 1,
    name: 'Angular 101',
    price: 10050,
    hours: 1,
    questions: [
      {
        id: 1,
        text: "Property binding with [value]=\"foo\" or interpolation with {{foo}} results in",
        alternatives: [
          {
            id: 1,
            text: "One-way binding from the component to the view"
          },
          {
            id: 2,
            text: "One-way binding from the view to the component"
          },
          {
            id: 3,
            text: "Two-way binding"
          }
        ],
        solution: 1
      },
      {
        id: 2,
        text: "Event binding with (click)=\"doSomething()\" results in",
        alternatives: [
          {
            id: 1,
            text: "One-way binding from the component to the view"
          },
          {
            id: 2,
            text: "One-way binding from the view to the component"
          },
          {
            id: 3,
            text: "Two-way binding"
          }
        ],
        solution: 2
      },
      {
        id: 3,
        text: "Using ngModel with [(ngModel)]=\"foo\" results in",
        alternatives: [
          {
            id: 1,
            text: "One-way binding from the component to the view"
          },
          {
            id: 2,
            text: "One-way binding from the view to the component"
          },
          {
            id: 3,
            text: "Two-way binding"
          }
        ],
        solution: 3
      },
      {
        id: 4,
        text: "ngFor is an example of",
        alternatives: [
          {
            id: 1,
            text: "Attribute directive"
          },
          {
            id: 2,
            text: "Structural directive"
          },
          {
            id: 3,
            text: "Destructuring assignment"
          }
        ],
        solution: 2
      },
      {
        id: 5,
        text: "ngClass is an example of",
        alternatives: [
          {
            id: 1,
            text: "Attribute directive"
          },
          {
            id: 2,
            text: "Structural directive"
          },
          {
            id: 3,
            text: "Destructuring assignment"
          }
        ],
        solution: 1
      }
    ]
  },
  { id: 2, name: 'Cooking with Cato', price: 20000, hours: 2, questions: [] },
  { id: 3, name: 'Routing and multiple modules in Angular 2', price: 15000, hours: 1, questions: [] },
];

let quizzesPromise = Promise.resolve(QUIZZES);

