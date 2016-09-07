import { Quiz } from './index';

export class QuizService {

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
    id: 1, name: 'Angular 101', price: 10050, hours: 1, questions: [
      {
        id: "q1",
        text: "Property binding with [value]=\"foo\" or interpolation with {{foo}} results in",
        alternatives: [
          {
            id: "q1.a1",
            text: "One-way binding from the component to the view"
          },
          {
            id: "q1.a2",
            text: "One-way binding from the view to the component"
          },
          {
            id: "q1.a3",
            text: "Two-way binding"
          }
        ],
        solution: "q1.a1"
      },
      {
        id: "q2",
        text: "Event binding with (click)=\"doSomething()\" results in",
        alternatives: [
          {
            id: "q2.a1",
            text: "One-way binding from the component to the view"
          },
          {
            id: "q2.a2",
            text: "One-way binding from the view to the component"
          },
          {
            id: "q2.a3",
            text: "Two-way binding"
          }
        ],
        solution: "q2.a2"
      },
      {
        id: "q3",
        text: "Using ngModel with [(ngModel)]=\"foo\" results in",
        alternatives: [
          {
            id: "q3.a1",
            text: "One-way binding from the component to the view"
          },
          {
            id: "q3.a2",
            text: "One-way binding from the view to the component"
          },
          {
            id: "q3.a3",
            text: "Two-way binding"
          }
        ],
        solution: "q3.a3"
      },
      {
        id: "q4",
        text: "ngFor is an example of",
        alternatives: [
          {
            id: "q4.a1",
            text: "Attribute directive"
          },
          {
            id: "q4.a2",
            text: "Structural directive"
          },
          {
            id: "q4.a3",
            text: "Destructuring assignment"
          }
        ],
        solution: "q4.a2"
      },
      {
        id: "q5",
        text: "ngClass is an example of",
        alternatives: [
          {
            id: "q5.a1",
            text: "Attribute directive"
          },
          {
            id: "q5.a2",
            text: "Structural directive"
          },
          {
            id: "q5.a3",
            text: "Destructuring assignment"
          }
        ],
        solution: "q5.a1"
      }
    ]
  },
  { id: 2, name: 'Cooking with Cato', price: 20000, hours: 2, questions: [] },
  { id: 3, name: 'Routing and multiple modules in Angular 2', price: 15000, hours: 1, questions: [] },
];

let quizzesPromise = Promise.resolve(QUIZZES);

