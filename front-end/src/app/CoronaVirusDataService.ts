import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CoronaVirusDataService {
  constructor(private httpClient: HttpClient) { }

  getCoronaUpdate() {
  return this.httpClient.get('http://localhost:8080/home');
  }

}
