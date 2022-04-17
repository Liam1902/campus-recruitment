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
  autosave:any;
  navigat:any;
  save:any;
   minutes:any;
   answerid:any;
  timeLeft= 90;
  time=1800;

  interval:any;
//  twentyMinutesLater = new Date();
//  countDownDate = new Date("16:37:52").getTime();
//  now = new Date().getTime();
//  timeleft = this.countDownDate - this.now;
//  minutes = Math.floor((this.timeleft % (1000 * 60 * 60)) / (1000 * 60));
 
//  this.countDownDate.setMinutes(this.countDownDate.getMinutes() + 30);
  


startTimer() {

  
    this.interval = setInterval(() => {
      if(this.time > 0) {
        this.time--;
        this.minutes =this.time;

        // if(this.minutes==this.minutes/this.timeLeft){
        //     this.save=this.submit;
        //          console.log(this.save);
        // }
    
        // for(let i=0 ;i<=this.timeLeft;i+30){
        // }
        
      }else if(this.time==0){
        this.router.navigateByUrl('/nextpage');
      } 
      
      
      else {
        this.time = 90;
      }
    },1000)
  }

//   pauseTimer() {
//     clearInterval(this.interval);
//   }



  @Input() selectedQuestion:any;
  constructor(private quest: RegisterationService, private s:QuestionComponent , private fb:FormBuilder , private router: Router ) {


//  this.navigat= this.routes.navigate(['../nextpage'],{relativeTo: this.route});



    
    this.savequestion=this.fb.group({
        textarea:['',Validators.compose([Validators.required])],
        language:['',Validators.compose([Validators.required])],
      })
    // const single_question=s.onSelet
    // this.rester= this.quest.getquestion();
    // this.rester=this.s.onSelet(single_question)

    // console.log(single_question);
    
     this.rester= s.gquestion;
     console.log(this.rester);
   }

  ngOnInit(): void {
    this.startTimer();
    this.onSave();
    
    
  }

  onSkip(){
    this.rester==null;
    // alert('If you are Skip Question you will loss you code')
   
  }

  onSbmits(data:any){
    if(confirm("You want to submit")){
      // this.s.call=false;
      this.router.navigateByUrl('/nextpage');
    }
    const get_answer={
      answer: data.value.textarea,
      language:data.value.language,
      question_id:this.selectedQuestion.id,
      student_id:this.selectedQuestion.id
    }
    console.log( this.savequestion)
    this.submit=this.quest.getanser(get_answer).subscribe(res=>{
      console.log(res);
      // setTimeout(()=>{                           // <<<---using ()=> syntax
      //   this.save = res;
      //   console.log(this.save);}, 30);
      
    },
      (error)=>{console.log(error)}

      // if(confirm("conform to save  ")){

      // }
    )
  }
// public data:any
//   autoSave()){
//     const get_answer={
//       answer: data.value.textarea,
//       language:data.value.language,
//       question_id:this.selectedQuestion.id,
//       student_id:this.selectedQuestion.id
//     }
//     console.log( this.savequestion)
//     this.submit=this.quest.getanser(get_answer).subscribe(res=>{
//       console.log(res);
//       // setTimeout(()=>{                           // <<<---using ()=> syntax
//       //   this.save = res;
//       //   console.log(this.save);}, 30);
      
//     },
//       (error)=>{console.log(error)}

//       // if(confirm("conform to save  ")){

//       // }
//     )


//   }
  onSave(){
    for(let i=0;i<=1800;i++){
      if(i==this.timeLeft){
        if(this.answerid==null){
          const auto_save={
            answer:this.savequestion.value.textarea,
            language:this.savequestion.value.language,
            question_id:this.selectedQuestion.id,
            student_id:this.selectedQuestion.id,
          }
          this.autosave=this.quest.getanser(auto_save).subscribe(res=>{
            console.log(res.message);
          this.answerid=res.message.id;
        console.log(this.answerid)},
          
            (error)=>{
              console.log(error);
            })
        }
        else{
          //update code here



        }
        this.timeLeft+90
      }
    }
  }
 
}
  // onSave(data:any){
  //   const get_answer={
  //     answer: data.value.textarea,
  //     language:data.value.language,
  //     question_id:this.selectedQuestion.id,
  //     student_id:this.selectedQuestion.id
  //   }

  //   this.submit=this.quest.getanser(get_answer).subscribe(res=>{
  //     console.log(res);
  //   },
  //     (error)=>{console.log(error)}

  //     // if(confirm("conform to save  ")){

  //     // }
  //   )

  // }

// (res) => {
//   console.log(res);
// },(error) =>{
// console.log('error is runing'+ error);
// },