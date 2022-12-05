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

export interface ExamResponse {
  examName: string;
  username: string;
  answers: Answers[];
}

export interface Answers {
  questionId: number;
  selectedAlternativeId: any;
}
