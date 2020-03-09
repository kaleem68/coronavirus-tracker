

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MessageService {

  constructor(private httpClient: HttpClient) { }
    getMessage() {
    return this.httpClient.get("http://localhost:8080/hello");
  }

}


