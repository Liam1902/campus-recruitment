import { RegisterationService } from './../../services/registeration.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  random:any;
  student_id: any = null;
  

  constructor(private quest: RegisterationService,
     private routes:Router,
      private route:ActivatedRoute,
      private question:RegisterationService) { 
   this.question.getquestion();
    this.route.paramMap.subscribe((param: ParamMap)=> {
      this.student_id = param.get('id');
    });
  }
  
  
  ngOnInit(): void {
    this.selectQuestion();
    this.random=Math.floor((Math.random() * 3)+1);

    }
  

  selectQuestion(){
   this.question.getquestion().subscribe( 
      
    (res) => {
      this.gquestion = res
  },(error) =>{
    console.log('error is runing'+ error);
  },

  );

  }
  public selectedQuestion:any;

  onSelet(data:any){
    console.log(data);
    this.call = true;
    let value = {
      question_id: data.id,
      student_id: this.student_id
    }
    this.selectedQuestion = value;
  }
}


// console.log(data.id);
// console.log(data.question);
// console.log(this.question_select);

// this._http.getRequest().subscribe(
//   (res: any[]) => this.requests =res
// );