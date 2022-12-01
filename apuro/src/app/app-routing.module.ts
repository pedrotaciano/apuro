import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveExamsComponent } from './home-student/active-exams/active-exams.component';
import { ExamComponent } from './home-student/components/exam/exam.component';
import { HomeStudentComponent } from './home-student/home-student.component';

const routes: Routes = [
  { path: '', component: HomeStudentComponent },
  { path: 'active-exams', component: ActiveExamsComponent },
  { path: 'exam/:id', component: ExamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
