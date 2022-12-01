import { Alternative } from './alternative';

export interface Question {
  id: number;
  text: string;
  alternatives: Alternative[];
}
