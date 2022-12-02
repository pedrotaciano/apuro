import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActiveExamsComponent } from './home-student/active-exams/active-exams.component';
import { ExamComponent } from './home-student/components/exam/exam.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home/student', component: HomeStudentComponent },
  { path: 'student/exam/:id', component: ExamComponent },
  { path: 'student/active-exams', component: ActiveExamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
