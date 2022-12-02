export interface Exam {
  id: number;
  name: string;
  subjectCode: string;
  startDateTime: string;
  endDateTime: string;
  status: string;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  alternatives: Alternative[];
}

export interface Alternative {
  id: number;
  text: string;
}

export interface QuestionResponse {
  questionId: number;
  selectedAlternativeId: any;
}
