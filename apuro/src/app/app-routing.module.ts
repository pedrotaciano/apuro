import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActiveExamsComponent } from './home-student/active-exams/active-exams.component';
import { ExamComponent } from './home-student/components/exam/exam.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { LoginComponent } from './login/login.component';
import { DashboardLayoutComponent } from './_layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'student/home',
        component: HomeStudentComponent,
      },
      {
        path: 'student/exam/:id',
        component: ExamComponent,
      },
      {
        path: 'student/active-exams',
        component: ActiveExamsComponent,
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
