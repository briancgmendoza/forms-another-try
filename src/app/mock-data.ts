import { questionTypes } from './types';

export const DUMMY_DATA: questionTypes[] = [
  {
    id: 1,
    parentQuestion: 'What Do You Intend To Do With This Property?',
    parentCode: 'IntendToDoWithProperty',
    parentType: 'radio',
    trigger:
      'Rental Property | Renovation 60 Days | Renovation Less 60 Days | Force Unable Obtain Proof',
    options: [
      {
        answer: 'Rental Property',
      },
      {
        answer: 'Renovation 60 Days',
      },
      {
        answer: 'Renovation Less 60 Days',
      },
      {
        answer: 'Force Unable Obtain Proof',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'DesiredLossRentAmount',
    childQuestion: 'Desired Loss Of Rents Amount:',
    childType: 'int',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 2,
    parentQuestion:
      'Does the property have (either) Knob And Tube or Aluminum wiring?',
    parentCode: 'KnobOrTubeAluminum',
    parentType: 'radio',
    trigger: 'Aluminum',
    options: [
      {
        answer: 'Knob and Tube',
      },
      {
        answer: 'Aluminum',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'AluminumWiringBeenRemediated',
    childQuestion: 'Has the aluminum wiring been remediated?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 3,
    parentQuestion: 'Is there a pool, hot tub, and/or spa at this location?',
    parentCode: 'IsPoolHotTubLocation',
    parentType: 'radio',
    trigger: 'YES',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'PoolHotTubMeetMunicipalCode',
    childQuestion:
      'Does the pool, hot tub, and/or spa meet current municipal parentCode?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 4,
    parentQuestion: 'What Do You Intend To Do With This Property?',
    parentCode: 'IntendToDoWithProperty',
    parentType: 'radio',
    trigger: 'Renovation60Days',
    options: [{}],
    parentSubmittedAnswer: '',
    childQuestionCode: 'PurchasePrice',
    childQuestion: 'Purchase Price:',
    childType: 'int',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 5,
    parentQuestion: 'What Do You Intend To Do With This Property?',
    parentCode: 'IntendToDoWithProperty',
    parentType: 'radio',
    trigger: 'Renovation60Days',
    options: [{}],
    parentSubmittedAnswer: '',
    childQuestionCode: 'RenovationCostEstimate',
    childQuestion: 'Renovation Cost Estimate:',
    childType: 'int',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 6,
    parentQuestion: 'What Do You Intend To Do With This Property?',
    parentCode: 'IntendToDoWithProperty',
    parentType: 'radio',
    trigger: 'YES',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'IsLocationOccupied',
    childQuestion:
      'Is the detached structure currently or intended to be occupied?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 7,
    parentQuestion: 'Are there any detached structures on the property?',
    parentCode: 'IsOtherStructures',
    parentType: 'RadioBtn',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'WhatBeingStoredThere',
    childQuestion: 'Are hazardous or flammable materials being stored here?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 8,
    parentQuestion:
      'Is the detached structure currently or intended to be occupied?',
    parentCode: 'IsLocationOccupied',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'RentingStructureSeparately',
    childQuestion:
      'Is the detached structure on a separate lease than the main dwelling?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 9,
    parentQuestion:
      'Is the detached structure currently or intended to be occupied?',
    parentCode: 'IsLocationOccupied',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'BusinessRanAtThatLocation',
    childQuestion:
      'Is there currently a business operating out of the detached structure?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 10,
    parentQuestion: 'No of Units.',
    parentCode: 'PropertyNoUnits',
    parentType: 'dropdown',
    trigger:
      '8 Units | 9 Units | 10 Units | 11 Units | 12 Units | 13 Units | 14 Units | 15 Units | 16 Units | 17 Units | 18 Units | 19 Units | 20 Units',
    options: [
      {
        answer: '8 Units',
      },
      {
        answer: '9 Units',
      },
      {
        answer: '10 Units',
      },
      {
        answer: '11 Units',
      },
      {
        answer: '12 Units',
      },
      {
        answer: '13 Units',
      },
      {
        answer: '14 Units',
      },
      {
        answer: '15 Units',
      },
      {
        answer: '16 Units',
      },
      {
        answer: '17 Units',
      },
      {
        answer: '18 Units',
      },
      {
        answer: '19 Units',
      },
      {
        answer: '20 Units',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'OccupancyTotalPercentage',
    childQuestion: 'What total percentage(%) of occupancy?',
    childType: 'int',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 11,
    parentQuestion: 'Has the aluminum wiring been remediated?',
    parentCode: 'AluminumWiringBeenRemediated',
    parentType: 'radio',
    trigger: 'YES',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'RemediationMethodUsed',
    childQuestion: 'Which remediation method was used?',
    childType: 'dropdown',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 12,
    parentQuestion: 'Is this location professionally managed?',
    parentCode: 'IsLocationProfessionalManaged',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'WhoMonitorsThePropertyAndHowOften',
    childQuestion: 'Who monitors the property and how often?',
    childType: 'text',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 13,
    parentQuestion: 'Is this location professionally managed?',
    parentCode: 'IsLocationProfessionalManaged',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'OtherStructureBuildingValue',
    childQuestion: 'Building value',
    childType: 'int',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 14,
    parentQuestion:
      'Is the detached structure currently or intended to be occupied?',
    parentCode: 'IsLocationOccupied',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'OtherStructureSquareFootage',
    childQuestion: 'Square footage',
    childType: 'int',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 15,
    parentQuestion:
      'Is the detached structure currently or intended to be occupied?',
    parentCode: 'IsLocationOccupied',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'OtherStructureIsPorchRooflineSagging',
    childQuestion:
      'Is the porch or roofline sagging on the detached structure?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 16,
    parentQuestion:
      'Is the detached structure currently or intended to be occupied?',
    parentCode: 'IsLocationOccupied',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'OtherStructureIsStructuralIssues',
    childQuestion: 'Are there any structural issues on the detached structure?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 17,
    parentQuestion:
      'Is the detached structure currently or intended to be occupied?',
    parentCode: 'IsLocationOccupied',
    parentType: 'radio',
    trigger: 'YES',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'IsOnCampusHousing',
    childQuestion: 'On Campus Housing?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 18,
    parentQuestion: 'Is the location leased to students?',
    parentCode: 'IsLocationLeasedToStudents',
    parentType: 'radio',
    trigger: 'NO',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'DoYouLeaseToUndergrads',
    childQuestion: 'Do you lease to undergrads?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 19,
    parentQuestion: 'Do you lease to undergrads?',
    parentCode: 'DoYouLeaseToUndergrads',
    parentType: 'radio',
    trigger: 'YES',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'DoYouRequireRentersInsurance',
    childQuestion: 'Do you require renter’s insurance?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
  {
    id: 20,
    parentQuestion: 'Do you lease to undergrads?',
    parentCode: 'DoYouLeaseToUndergrads',
    parentType: 'radio',
    trigger: 'YES',
    options: [
      {
        answer: 'YES',
      },
      {
        answer: 'NO',
      },
    ],
    parentSubmittedAnswer: '',
    childQuestionCode: 'DoYouRequireParentsToCosign',
    childQuestion: 'Do you require parents to cosign?',
    childType: 'radio',
    showChildQuestion: false,
    showDifferentQuestion: false,
  },
];
