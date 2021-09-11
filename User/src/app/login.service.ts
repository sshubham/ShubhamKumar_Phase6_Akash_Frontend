import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  ROOT_URL: String = 'http://ec2-54-89-144-106.compute-1.amazonaws.com:8080';

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    var body = {
      username: userName,
      password: password,
    };
    return this.http.post(this.ROOT_URL + '/login', body);
  }
}
