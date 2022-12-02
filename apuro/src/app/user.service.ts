import { Injectable } from '@angular/core';
import { Credentials, User } from './model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userLoggedIn!: User;

  constructor(private http: HttpClient) {}

  setUserLoggedIn(user: User) {
    this.userLoggedIn = user;
  }

  validateLogin(credentials: Credentials) {
    return this.http.post('http://localhost:5000/user/login', credentials);
  }
}
