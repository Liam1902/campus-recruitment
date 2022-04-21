import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

 

//   question=[{
//     id:1,
//     question:'what is component',
//     status:1
//   },
//   {
//     id:2,
//     question:'what is component',
//     status:2
//   },{
//     id:1,
//     question:'what is component',
//     status:3
//   },{
//     id:1,
//     question:'what is component',
//     status:3
//   },{
//     id:4,
//     question:'what is component',
//     status:4
//   },{
//     id:5,
//     question:'what is component',
//     status:5
//   },{
//     id:6,
//     question:'what is component',
//     status:6
//   },{
//     id:7,
//     question:'what is component',
//     status:7
//   },{
//     id:8,
//     question:'what is component',
//     status:8
//   },
// ]
 header:any;
constructor(private http: HttpClient) {
  this.header = new HttpHeaders({ 
    "Content-Type": "application/json",
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Credentials': 'true',
     
  })
 }


 saveAnswer(data:any):Observable<any>{
   return this.http.post('http://localhost:8080/campus_recruitment/answers',data,{headers: this.header})
 }

 updateAnswer(data: any) {
   return this.http.post('http://localhost:8080/campus_recruitment/update-answers', data, { headers: this.header});
 }

 getAnswer() {
   return this.http.get<any>('http://localhost:8080/campus_recruitment/get-answer', { headers: this.header});
 }

 getregisteration(data:any): Observable<any>{
  console.log("successfully connected ");
  
  return this.http.post('http://localhost:8080/campus_recruitment/students', data,{ headers: this.header});
}

getquestion(){
  return [
    {question1:' 1<br>121/<br>12321<br>1234321<br>123454321<br>12345654321<br><br><br>n = 6<br>Write a program to print above number pattern. <br/>Use a variable "n" in your program to control you output rows. <br/>For example: if value of the variable "n" is 6 you will see exactly same output as you can see above in this question.<br/>If you change value of variable "n" to any other number, you program must print number of rows defined by this variable "n".<br/></p>'},
    {question2:'65432123456<br>543212345<br>4321234<br>32123<br> 212<br>1<br> <br><br>n = 6<br><br/>Write a program to print above number pattern. <br/>Use a variable "n" in your program to control you output rows. <br/>For example: if value of the variable "n" is 6 you will see exactly same output as you can see above in this question.<br/>If you change value of variable "n" to any other number, you program must print number of rows defined by this variable "n".<br/></p>'}
  ]

}

updateStatus(data:any){
 return this.http.post('http://localhost:8080/campus_recruitment/update-status',data,{headers:this.header});
}


// genId(question: Hero[]): number {
//   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
// }
}








// createDb() {
//   const heroes = [
//     { id: 11, name: 'Dr Nice' },
//     { id: 12, name: 'Narco' },
//     { id: 13, name: 'Bombasto' },
//     { id: 14, name: 'Celeritas' },
//     { id: 15, name: 'Magneta' },
//     { id: 16, name: 'RubberMan' },
//     { id: 17, name: 'Dynama' },
//     { id: 18, name: 'Dr IQ' },
//     { id: 19, name: 'Magma' },
//     { id: 20, name: 'Tornado' }
//   ];
//   return {heroes};
// }

// Overrides the genId method to ensure that a hero always has an id.
// If the heroes array is empty,
// the method below returns the initial number (11).
// if the heroes array is not empty, the method below returns the highest
// hero id + 1.

