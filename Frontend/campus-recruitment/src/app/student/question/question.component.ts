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
  time:any;
  getquestion:any=[];
  

  constructor(private quest: RegisterationService,
     private routes:Router,
      private route:ActivatedRoute,
      private question:RegisterationService,
     ) { 
    this.getquestion= this.question.getquestion();
    this.route.paramMap.subscribe((param: ParamMap)=> {
      this.student_id = param.get('id');
    });
  }
  
  
  ngOnInit(): void {

    this.randomQuestion()
    
    this.random=Math.floor((Math.random() * 3)+1);

   function refresh(): void {
    window.location.reload();
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);
   function disableF5(e:KeyboardEvent) {

      if ((e.which || e.keyCode) == 116) e.preventDefault(); 
   };
}

    }

    randomQuestion(){
      this.time=setTimeout(() => {
        this.random=Math.floor((Math.random() * 3)+1);
      }, 1800000);
    }
  

  
  public selectedQuestion:any;

  onSelet(data:any){
    console.log(data);
    this.call = true;
    let value = {
      question_id: data,
      student_id: this.student_id
    }
    this.selectedQuestion = value;
  }
}

