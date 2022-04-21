import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {

  constructor( private locationSt:LocationStrategy) { }

  ngOnInit(): void {
    this.preventBackButton();
  }

  preventBackButton(){
    history.pushState(null,'null',location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,'null',location.href)
    })
  }


}
