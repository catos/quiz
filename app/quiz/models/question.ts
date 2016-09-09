import { Alternative } from '../index';

export interface Question {
  id: number;
  text: string;
  alternatives: Alternative[];
  solution: number;
}