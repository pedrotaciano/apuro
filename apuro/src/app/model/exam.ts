import { Question } from './question';

export interface Exam {
  id: number;
  name: string;
  subjectCode: string;
  startDateTime: string;
  endDateTime: string;
  status: string;
  questions: Question[];
}
