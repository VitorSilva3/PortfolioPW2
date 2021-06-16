import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  number1 : number = 0;
  number2 : number = 0;
  resultado;

  calcula(){
    this.resultado = this.number1 + this.number2;
    // this.resultado = eval(this.number1 + this.number2);
  }
}
