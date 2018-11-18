import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {TestserveService} from '../testserve.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  @Input() private message:string;
  @Output() private outmes=new EventEmitter<string>()
  private greeting:string;
  constructor(private testserver:TestserveService) { }

  ngOnInit() { //组件初始化加载数据
    this.greeting='Welcome Angular 2';
    this.testserver.debug('跟组件已经初始化完毕');
    this.outmes.emit('message from child');
  }

  
  // sendToParent(){
  //   this.outmes.emit('message from child');
  // }

}
