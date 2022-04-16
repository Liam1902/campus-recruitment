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
  ]
})
export class StudentModule { }
