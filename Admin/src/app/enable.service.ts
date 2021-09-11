import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnableService {
  readonly rootUrl =
    'http://ec2-3-91-178-241.compute-1.amazonaws.com:8084/user/';
  constructor(private http: HttpClient) {}

  enableLoginService(username) {
    return this.http.get(this.rootUrl + username + '/enable');
  }
}
