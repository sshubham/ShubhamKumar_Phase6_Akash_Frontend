import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChequebookResponse } from './_models/chequebookresponse';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  ROOT_URL: String = 'http://ec2-54-89-144-106.compute-1.amazonaws.com:8080';

  constructor(private http: HttpClient) {}

  insertRequest(accNo: number, pages: number = 20) {
    var body = {
      account: accNo,
      no_of_pages: pages,
    };
    console.log(body);
    return this.http.post<ChequebookResponse>(
      this.ROOT_URL + '/cheque/request',
      body
    );
  }
}
