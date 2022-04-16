import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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


 getanser(data:any):Observable<any>{
   return this.http.post('http://localhost:8080/campus_recruitment/answers',data,{headers: this.header})
 }

 getregisteration(data:any): Observable<any>{
  console.log("successfully connected ");
  
  return this.http.post('http://localhost:8080/campus_recruitment/students', data,{ headers: this.header});
}

getquestion(){
  return this.http.get('http://localhost:8080/campus_recruitment/questions',{ headers:this.header});

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

