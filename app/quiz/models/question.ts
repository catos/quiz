import { Alternative } from '../index';

export interface Question {
  id: string;
  text: string;
  alternatives: Alternative[];
  solution: string;
}