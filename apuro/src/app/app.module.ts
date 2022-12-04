import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExamCardComponent } from './home-student/components/exam-card/exam-card.component';
import { ActiveExamsComponent } from './home-student/active-exams/active-exams.component';
import { ExamComponent } from './home-student/components/exam/exam.component';
import { QuestionCardComponent } from './home-student/components/question-card/question-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DashboardLayoutComponent } from './_layout/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeStudentComponent,
    HomeTeacherComponent,
    LoginComponent,
    ExamCardComponent,
    ActiveExamsComponent,
    ExamComponent,
    QuestionCardComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
