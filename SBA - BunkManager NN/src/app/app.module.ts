import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { DeleteStudentComponent } from './component/delete-student/delete-student.component';
import { GenderCountPipe } from './pipes/gender-count.pipe';
import { BranchCountPipe } from './pipes/branch-count.pipe';
import { AdjustLengthPipe } from './pipes/adjust-length.pipe';
import { SortPipe } from './pipes/sort.pipe';

const paths : Routes = [
  { path : '', component : DashboardComponent},
  { path : 'listStudents', component : StudentListComponent },
  { path : 'listStudents/:field/:value', component : StudentListComponent },
  { path : 'addStudent', component : StudentFormComponent },
  { path : 'editStudent/:id', component : StudentFormComponent },
  { path : 'deleteStudent/:id', component : DeleteStudentComponent },
  { path : 'viewStudent/:id', component : StudentDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    DashboardComponent,
    DeleteStudentComponent,
    GenderCountPipe,
    BranchCountPipe,
    AdjustLengthPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
