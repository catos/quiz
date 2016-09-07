import { Question } from '../index';

export interface Quiz {
  id: number;
  name: string;
  price: number;
  hours: number;
  questions: Question[];
}