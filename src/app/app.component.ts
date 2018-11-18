import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular01';
private magTochild:string;
private msgFP:string;
  constructor(){}
  ngOnInit(){
    this.magTochild='来自父元素的数据'
  }

  reveive(msg:string){
this.msgFP=msg;
  }
}
