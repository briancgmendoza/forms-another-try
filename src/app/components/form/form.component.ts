import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  selectedAnswers: string[] = [];
  answer1!: string; // Parent question 1
  answer2!: string; // Parent question 2
  answer3!: string; // parent question 3
  answer4!: string; // Parent question 4
  answer5!: string; // Parent question 5
  answer6!: string; // parent question 6
  answer7!: string; // Parent question 7
  answer8!: string; // Parent question 8
  answer9!: string; // parent question 9
  answer10!: string; // Parent question 10
  answer11!: string; // Parent question 11
  answer12!: string; // parent question 12
  answer13!: string; // Parent question 13
  answer14!: string; // Parent question 14
  answer15!: string; // parent question 15
  answer16!: string; // Parent question 16
  answer17!: string; // Parent question 17
  answer18!: string; // parent question 18
  answer19!: string; // Parent question 19
  answer20!: string; // Parent question 20
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Clicked');
  }

  saveAnswers() {
    // for (let i = 0; i < 20; i++) {
    //   const transformed = (this.answer1 += i - 1);
    //   this.selectedAnswers.push(transformed);
    //   i++;
    // }

    this.selectedAnswers.push(this.answer1);
    this.selectedAnswers.push(this.answer2);
    this.selectedAnswers.push(this.answer3);
    this.selectedAnswers.push(this.answer4);
    this.selectedAnswers.push(this.answer5);
    this.selectedAnswers.push(this.answer6);
    this.selectedAnswers.push(this.answer7);
    this.selectedAnswers.push(this.answer8);
    this.selectedAnswers.push(this.answer9);
    this.selectedAnswers.push(this.answer10);
    this.selectedAnswers.push(this.answer11);
    this.selectedAnswers.push(this.answer12);
    this.selectedAnswers.push(this.answer13);
    this.selectedAnswers.push(this.answer14);
    this.selectedAnswers.push(this.answer15);
    this.selectedAnswers.push(this.answer16);
    this.selectedAnswers.push(this.answer17);
    this.selectedAnswers.push(this.answer18);
    this.selectedAnswers.push(this.answer19);
    this.selectedAnswers.push(this.answer20);

    console.log(this.selectedAnswers);

    /* Clear fields */
    // for (let i = 0; i < 20; i++) {
    //   let clear = (this.answer1 += i - 1);
    //   clear = '';
    //   i++;
    // }

    this.answer1 = '';
    this.answer2 = '';
    this.answer3 = '';
    this.answer4 = '';
    this.answer5 = '';
    this.answer6 = '';
    this.answer7 = '';
    this.answer8 = '';
    this.answer9 = '';
    this.answer10 = '';
    this.answer11 = '';
    this.answer12 = '';
    this.answer13 = '';
    this.answer14 = '';
    this.answer15 = '';
    this.answer16 = '';
    this.answer17 = '';
    this.answer18 = '';
    this.answer19 = '';
    this.answer20 = '';
  }
}
