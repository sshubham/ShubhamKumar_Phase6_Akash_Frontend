import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './model/userData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url = 'http://ec2-3-91-178-241.compute-1.amazonaws.com:8084/';

  constructor(private http: HttpClient) {}

  public getAllUsers() {
    return this.http.get<any[]>(this.url + 'user/all');
  }
}
