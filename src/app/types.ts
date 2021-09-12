export interface questionTypes {
  id?: number;
  parentQuestion: string;
  parentCode: string;
  parentType: string;
  parentSubmittedAnswer: string;
  trigger: string;
  options: any;
  childQuestionCode: string;
  childQuestion: string;
  childType: string;
  showChildQuestion: boolean;
  showDifferentQuestion: boolean;
}
