import { Component } from '@angular/core';
import { task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  textValue = "";
  constructor(){

  }
  Items:Array<task>=[
    {
      title : "A default item",
      complete : false
    },
    {
      title : "A completed default item",
      complete: true
    }
  ];

clear=()=>{
  let arr:Array<number>=[]; 
  this.Items.forEach((element,index)=> {
     if(element.complete){
       arr.push(index);
     }
  });
  for (let index = arr.length-1; index>=0; index--) {
    this.Items.splice(arr[index],1);
  } 
}

addTask=()=>{
  this.Items.push({
    title:this.textValue,
    complete:false
  });
  this.textValue = ""
}

checkVal=(index:number)=>{
  this.Items[index].complete=!this.Items[index].complete;
}
}
