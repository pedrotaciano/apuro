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
import { ExamService } from '../exam.service';
import { User, Credentials } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  userLoggedIn: User = {
    credentials: {
      username: 'invalid',
      password: 'invalid',
    },
    userId: -1,
    role: 'invalid',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  login() {
    let credentials: Credentials = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };
    let role = this.loginForm.controls['role'].value;

    console.log('credentials:', credentials);

    this.userLoggedIn.credentials = credentials;
    this.userLoggedIn.role = role;
    this.userService.setUserLoggedIn(this.userLoggedIn);
    if (this.userService.validateLogin(credentials)) {
      this.examService.getExams();
      setTimeout(() => {
        this.navigateToHome(role);
      }, 2000);
    }
  }

  navigateToHome(role: string) {
    this.router.navigate([role + '/home/']);
  }
}
