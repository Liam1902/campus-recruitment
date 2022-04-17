import { Component, OnInit } from '@angular/core';
import { RegisterationService } from '../services/registeration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  status=false;
  ganswer:any=[];
  constructor(private registrationService :RegisterationService ) { 
  }
  
  ngOnInit(): void {
    this.getAnswer();
  }

  getAnswer() {
    this.registrationService.getAnswer().subscribe({
      next: (res: any) => {
        this.ganswer = res.data;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('complete');
      }
    })
  }

  viewAnswer() {

  }
}
