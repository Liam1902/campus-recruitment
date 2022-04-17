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
  constructor(private getanswer :RegisterationService ) { 
    this.getanswer.getanswer();
  }
  
  ngOnInit(): void {
    this.viewTable();
  }


  viewAnswer(){
    this.status=true;
  }
     
  viewTable(){


    this.getanswer.getanswer().subscribe((res) => {
      console.log(res);
      this.ganswer=res;
    },
    (error)=>{
      console.log(error);
    })
  
  }

}
