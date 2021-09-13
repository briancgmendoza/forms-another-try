export interface JsonFormData {
  questionnaire: Questionnaire[];
}

export interface Questionnaire {
  id: number;
  ParentQuestion: string;
  ParentCode: string;
  ParentType: string;
  AnswerTrigger: string;
  Options: Option[];
  ParentSubmittedAnswer: string;
  ChildQuestionCode: string;
  ChildQuestion: string;
  ChildType: string;
  ShowChildQuestion: boolean;
  ShowOtherQuestion: boolean;
  Validators: any;
}

interface Option {
  option: string;
}
