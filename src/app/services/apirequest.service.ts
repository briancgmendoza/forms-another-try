import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators'
import { Questionnaire } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApirequestService {
  private apiUrl = 'http://localhost:1090/api/Questionnaire';
  constructor(private http: HttpClient) {}

  getData(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(this.apiUrl)
  }

  updateData(data: Questionnaire[]): Observable<Questionnaire[]> {
    return this.http.put<Questionnaire[]>(this.apiUrl, data, httpOptions);
  }
}
