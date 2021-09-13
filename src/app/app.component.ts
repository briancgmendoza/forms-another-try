import { Component, OnInit } from '@angular/core';
import { ApirequestService } from '../app/services/apirequest.service'
import { JsonFormData, Questionnaire } from './types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formData!: JsonFormData;


  constructor(private http: HttpClient, private apiRequestService: ApirequestService) { }

  ngOnInit(): void {
    //this.apiRequestService.getData().subscribe((formData: Questionnaire[]) => {
    //  this.formData = formData
    //  console.log(this.formData)
    //})


    this.http.get('../assets/questionnaire.json').subscribe((formData: any) => {
      this.formData = formData;
    });
  }
}
