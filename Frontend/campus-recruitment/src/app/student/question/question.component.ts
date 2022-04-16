import { RegisterationService } from './../../services/registeration.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  register:any=[];
  call=false;
  length=0;
  question_select: any;
  gquestion :any = [];
  
  

  constructor(private quest: RegisterationService,
     private routes:Router,
      private route:ActivatedRoute,
      private question:RegisterationService) { 
   this.question.getquestion();
    
  }
  
  ngOnInit(): void {
    this.selectQuestion();
    }
  

  selectQuestion(){
   this.question.getquestion().subscribe( 
      
    (res) => {
      console.log(res);
      this.gquestion = res
      // this.question_select={
      //   id: res.id,
      //   questin:res.name
      // }

        
    
  },(error) =>{
    console.log('error is runing'+ error);
  },

  );

  }
  public selectedQuestion:any;
  onSelet(data:any){
    this.call = true;
    this.selectedQuestion = data;
  }

}


// console.log(data.id);
// console.log(data.question);
// console.log(this.question_select);

// this._http.getRequest().subscribe(
//   (res: any[]) => this.requests =res
// );