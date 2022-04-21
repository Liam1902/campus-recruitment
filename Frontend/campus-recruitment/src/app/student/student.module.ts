import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { QuestionComponent } from './question/question.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { HaederComponent } from './haeder/haeder.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { NextpageComponent } from './nextpage/nextpage.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


// import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    StudentComponent,
    RegisterationComponent,
    QuestionComponent,
    SingleQuestionComponent,
    HaederComponent,
    NextpageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
   
  ]
})
export class StudentModule { }
