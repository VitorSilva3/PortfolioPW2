import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  cor : string = "teal";
  tipo : string = "text";

  changeColor(corR:string){
    this.cor = corR;
  }

  mudar(){
    if(this.tipo == "text"){
        this.tipo = "password";
    }
    else{
      this.tipo = "text";
    }
  }
  ngOnInit(): void {
  }

}
