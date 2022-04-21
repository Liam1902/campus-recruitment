import { FormBuilder, Validators } from '@angular/forms';
import { QuestionComponent } from './../question/question.component';
import { Component, Input, OnInit } from '@angular/core';
import { RegisterationService } from 'src/app/services/registeration.service';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 



@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  public Editor=ClassicEditor;
  savequestion: any;
  minutes = 30;
  seconds = 60;
  timer: any;
  draftTimer = 90;
  answerId = null;
  time:any= 1*31*60;
  

  interval: any;

  @Input() selectedQuestion: any;
  constructor(private registrationService: RegisterationService, private s: QuestionComponent, private fb: FormBuilder, private router: Router) {
    this.savequestion = this.fb.group({
      textarea: ['', Validators.compose([Validators.required])],
      language: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.questionTimer();
    this.startTimer()
  }
 
  questionTimer() {
    this.timer = setInterval(() => {
      // if(this.minutes == 0 && this.seconds == 0) {
      //   this.onSubmit(this.savequestion);
      //   return;
      // } 
      if(this.draftTimer === 0) {
        this.draftTimer = 90;
        if(this.answerId == null) {  
            this.createAnswer(this.savequestion); 
        } else {
          this.updateAnswer(this.savequestion);
        }
      }
      if(this.seconds === 0) {
        this.minutes = this.minutes - 1;
        this.seconds = 60;
      }
      this.seconds = this.seconds - 1; 
      this.draftTimer = this.draftTimer - 1;
    }, 1000);
  }

  onSubmit(data: any) {
    if(this.answerId == null) {
      this.createAnswer(data);
    } else {
      this.updateAnswer(data);
    }
    clearInterval(this.timer);
    this.router.navigate(['/nextpage']);
  }

  createAnswer(data: any) {
    let answer_data = {
      answer: data.value.textarea,
      language: data.value.language,
      student_id: this.selectedQuestion.student_id,
      question_id: this.selectedQuestion.question_id
    };
   if(answer_data.answer != ""){
    this.registrationService.saveAnswer(answer_data).subscribe({
       next: (res: any) => {
         this.answerId = res.message.id;
       }, error: err => {
        console.log(err);
       }, complete: () => {
         console.log('complete');
       }
    })
   }
  } 

  updateAnswer(data: any) {
    let answer_data = {
      answer: data.value.textarea,
      language: data.value.language,
      id: this.answerId
    };
    this.registrationService.updateAnswer(answer_data).subscribe({
      next: (res: any) => {
        console.log(res.message);
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('complete');
      }
    })
  }

  startTimer(){
    window.setInterval(()=>{
      this.time--;
    },1000)
  }
}
