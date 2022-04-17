import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RegisterationService } from './../../services/registeration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

   registerform:any;
   numberRegEx = /\-?\d*\.?\d{1,2}/;
   form:boolean=false;
   register:any;
   dat:any;
   constructor(private fb:FormBuilder ,
     private RegisterationService:RegisterationService,
     private routes:Router,
     private route:ActivatedRoute,
     ) { 

       this.registerform=this.fb.group({
         name:['',Validators.compose([Validators.required])],
         fatherName:['',Validators.compose([Validators.required])],
         email:['',Validators.compose([Validators.required,Validators.email])],
         mobileNo:['',Validators.compose([Validators.required,Validators.minLength(0),Validators.maxLength(10),Validators.pattern(this.numberRegEx)])],
         collegeName:['',Validators.compose([Validators.required])],
         branch:['',Validators.compose([Validators.required])],
         passing:['',Validators.compose([Validators.required])]});
         
     }
   
   ngOnInit(): void {
    //  this.form?this.RegisterationService.getregisteration():
   
  }

  onSubmit(data:any){

      const registeration_data = {
        name : data.name,
        father_name : data.fatherName,
        email : data.email,
        mobile_number : data.mobileNo,
        college_name : data.collegeName,
        branch : data.branch,
        passing_year : data.passing
      }

    this.form=true;
    this.register=this.RegisterationService.getregisteration(registeration_data).subscribe( 
      
      (res) => {
        this.routes.navigate(['../question', res.data.id],{relativeTo: this.route})
    },(error) =>{
      console.log('error is runing'+ error);
    },
    );
  }

  onClick(){
  }

}

