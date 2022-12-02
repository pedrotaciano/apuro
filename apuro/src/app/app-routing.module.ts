import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActiveExamsComponent } from './home-student/active-exams/active-exams.component';
import { ExamComponent } from './home-student/components/exam/exam.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeStudentComponent },
  { path: 'student/home', component: HomeStudentComponent },
  { path: 'student/active-exams', component: ActiveExamsComponent },
  { path: 'student/exam/:id', component: ExamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
