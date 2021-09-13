import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public formData!: JsonFormData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('../assets/questionnaire.json').subscribe((formData: any) => {
      this.formData = formData;
    });
  }
}
