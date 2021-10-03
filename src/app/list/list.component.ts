import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { task } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() Items:Array<task>=[];
  @Output() checkEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  triggerCheck(task:number){
    this.checkEvent.emit(task);
  }

}
