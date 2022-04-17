import { NextpageComponent } from './student/nextpage/nextpage.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'student',component:StudentComponent,
  loadChildren: ()=>import('./student/student.module').then(m=>m.StudentModule)  
},
{path:"nextpage",component:NextpageComponent},
{path:"admininit",component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
