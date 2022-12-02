import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { Credentials } from '../model/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  userLoggedIn!: User;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userServices: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter your email';
  //   }
  //   if (this.password.hasError('required')) {
  //     return 'You must enter a password';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  login(username: string, password: string) {
    let credentials: Credentials = {
      username: username,
      password: password,
    };

    this.userServices.validateLogin(credentials);
    this.userServices.getUserProfile(credentials);
    this.userServices.setUserLoggedIn(this.userLoggedIn);
  }
}
