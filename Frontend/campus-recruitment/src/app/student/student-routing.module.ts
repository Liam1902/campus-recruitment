import { NextpageComponent } from './nextpage/nextpage.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { SingleQuestionComponent } from './single-question/single-question.component';

const routes: Routes = [
  {path:'',redirectTo:'student'},
  {path:'student'},
  {path:'registration',component:RegisterationComponent},
  {path:'question',component:QuestionComponent},
  {path:'nextpage',component:NextpageComponent},
  {path:'singlequestion',component:SingleQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
