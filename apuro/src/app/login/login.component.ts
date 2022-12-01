import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
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

  login() {
    if (this.validateLogin()) {
      this.router.navigate(['/home-student']);
    } else {
      alert('Login inválido');
    }
  }

  validateLogin() {
    return this.http
      .post('http://localhost:5000/user/login', {
        username: this.loginForm.get(['username'])!.value,
        password: this.loginForm.get(['password'])!.value,
      })
      .subscribe((data) => {
        return data;
      });
  }
}
