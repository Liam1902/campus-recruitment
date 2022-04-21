import { Component, OnInit } from '@angular/core';
import { RegisterationService } from 'src/app/services/registeration.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  select:any;
   filed:any = ['pass','fail','hold'];
  ganswer:any=[];
  public ansid : any;

  constructor(private saveResult:RegisterationService, 
    private registrationService :RegisterationService) { }

  ngOnInit(): void {
    this.getAnswer()
  }
  getAnswer() {
    this.registrationService.getAnswer().subscribe({
      next: (res: any) => {
        console.log(res.data);
        // this.result=res.data.answer?.status;
        // console.log(this.result);
        this.ganswer = res.data;
        this.ansid = res.answer?.id;
        // console.log(res.data.answer?.id);
        // this.id_variable= this.ganswer.answer?.id;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('complete');
      }
    })
  }
  onclick(data:any,select:any){
    console.log(data)
    console.log(select);
    const save_result={
      id:data,
      status:select,
    }
    console.log(save_result);
    this.saveResult.updateStatus(save_result).subscribe({
      next:(res:any) => {
        console.log(res);
      }, error: err =>{
        console.log(err);
      }, complete:()=>{
        console.log('complete')
      }
    })
    console.log('selected');
    
  }


  changeCity(e: any) {
    this.select?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
