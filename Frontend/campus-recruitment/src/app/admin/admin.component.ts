import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterationService } from '../services/registeration.service';
 import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  status=false;
  ganswer:any=[];
  result:any=[];
  public id_variable:any;
  public ansid : any;
  select:any;
   filed:any = ['pass','fail','hold'];
   loop:any=['0','1','3'];

  constructor(private registrationService :RegisterationService ,
    private saveResult:RegisterationService,
    public dialog: MatDialog
    ) { }

  
  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  ngOnInit(): void {
    this.getAnswer();
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

  get cityName() {
    return this.loop
  }

  viewAnswer() {
    this.status=true;
  }
  crose(){
    this.status=false;
  }
}
//dialog ......................................................................

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: './dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {
//   ganswer:any=[];
//   public ansid : any;

//   constructor(private registrationService :RegisterationService){}
//   getAnswer() {
//     this.registrationService.getAnswer().subscribe({
//       next: (res: any) => {
//         console.log(res.data);
//         // this.result=res.data.answer?.status;
//         // console.log(this.result);
//         this.ganswer = res.data;
//         this.ansid = res.answer?.id;
//         // console.log(res.data.answer?.id);
//         // this.id_variable= this.ganswer.answer?.id;
//       }, error: err => {
//         console.log(err);
//       }, complete: () => {
//         console.log('complete');
//       }
//     })
//   }
// }