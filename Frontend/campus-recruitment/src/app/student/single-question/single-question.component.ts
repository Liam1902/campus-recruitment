import { FormBuilder, Validators } from '@angular/forms';
import { QuestionComponent } from './../question/question.component';
import { Component, Input, OnInit } from '@angular/core';
import { RegisterationService } from 'src/app/services/registeration.service';
import { Routes, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  savequestion:any;
  rester:any;
  submit:any;
  //  routers:Routes;
  //  route: ActivatedRoute;
  navigat:any;
   

  timeLeft: number = 90;
  interval:any;

// startTimer() {
//     this.interval = setInterval(() => {
//       if(this.timeLeft > 0) {
//         this.timeLeft--;
        
//       }else if(this.timeLeft==0){
//         this.router.navigateByUrl('/nextpage');
//       } 
      
      
//       else {
//         this.timeLeft = 90;
//       }
//     },1000)
//   }

//   pauseTimer() {
//     clearInterval(this.interval);
//   }



  @Input() selectedQuestion:any;
  constructor(private quest: RegisterationService, private s:QuestionComponent , private fb:FormBuilder , private router: Router ) {


//  this.navigat= this.routes.navigate(['../nextpage'],{relativeTo: this.route});



    
    this.savequestion=this.fb.group({
        textarea:[],
        language:[],
      })
    // const single_question=s.onSelet
    // this.rester= this.quest.getquestion();
    // this.rester=this.s.onSelet(single_question)

    // console.log(single_question);
    
     this.rester= s.gquestion;
     console.log(this.rester);
   }

  ngOnInit(): void {
    // this.startTimer()
    
  }

  onSkip(){
    this.rester==null;
    // alert('If you are Skip Question you will loss you code')
    if(confirm("Are you sure to delete ")){
      this.s.call=false;
    }
  }

  onSbmit(data:any){
    // this.router.navigateByUrl('/nextpage');
    const get_answer={
      answer: this.savequestion.controls.answer.value,
      language:data.language,
      question_id:this.selectedQuestion.id,
      student_id:this.selectedQuestion.id
    }
    console.log("this is "+ data)
    this.submit=this.quest.getanser(get_answer).subscribe(res=>{

      // if(confirm("conform to save  ")){

      // }
    })
   
  }

  onNext(){
    

  }
}
// (res) => {
//   console.log(res);
// },(error) =>{
// console.log('error is runing'+ error);
// },