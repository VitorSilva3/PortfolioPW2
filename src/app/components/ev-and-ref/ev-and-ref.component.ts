import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  corBackground="red";

  changeColor(){
   // this.corBackground = "pink";

    this.corBackground = this.corBackground == 'red' ? 'white' : 'red';
  }

  ngOnInit(): void {
  }

}
