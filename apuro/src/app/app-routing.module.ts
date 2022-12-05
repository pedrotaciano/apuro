import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { ActiveExamsComponent } from './home-student/active-exams/active-exams.component';
import { ExamComponent } from './home-student/components/exam/exam.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { LoginComponent } from './login/login.component';
import { DashboardLayoutComponent } from './_layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'student',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeStudentComponent,
      },
      {
        path: 'exam/:name',
        component: ExamComponent,
      },
      {
        path: 'active-exams',
        component: ActiveExamsComponent,
      },
      {
        path: 'result/1',
        component: ExamResultComponent,
      },
    ],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
