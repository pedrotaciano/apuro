import { Injectable } from '@angular/core';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http';
import { Credentials } from './model/credentials';

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
    return this.http.get('http://localhost:5000/user/login');
  }
}
