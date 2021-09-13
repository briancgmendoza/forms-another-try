import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApirequestService } from '../../services/apirequest.service'
import { JsonFormData, Questionnaire } from 'src/app/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnChanges {
  @Input() jsonFormData!: JsonFormData;
  //@Input() data: Questionnaire[] = []
  public myForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private apiRequestService: ApirequestService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.jsonFormData.firstChange) {
      this.createForm(this.jsonFormData.questionnaire);
    }

    //if (!changes.jsonFormData.firstChange) {
    //  this.createForm(this.jsonFormData);
    //}
  }

  createForm(controls: Questionnaire[]) {
    for (const control of controls) {
      this.myForm.addControl(
        control.ChildQuestionCode,
        this.formBuilder.control(control.ParentSubmittedAnswer)
      );
    }
  }

  onSubmit() {
    console.log('Form values:', this.myForm.value);
    //this.apiRequestService.updateData(this.myForm.value)
  }

  getValue(event: Event, a: Questionnaire) {
    a.ParentSubmittedAnswer = (event.target as HTMLInputElement).value;
  }
}
