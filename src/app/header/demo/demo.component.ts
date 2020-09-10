import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
   msg:string ="";

  ngOnInit(): void {
  }

  mycart(){
    this.msg ="Product is Add";
  }

}
