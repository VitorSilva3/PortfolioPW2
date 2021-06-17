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

  botEsDis = "Block";
  botDiDis = "None";
  posicao = "44vw";
  qualCal = 1;

  mudaPosiEs() {
    /*if (this.qualCal == 1) {
      this.posicao = "-20vw";
      this.qualCal++;
    }
    else if (this.qualCal == 2) {
      this.posicao = "-90vw";
      this.qualCal++;
    }*/

    if (this.posicao == "44vw") {
      this.posicao = "-20vw";
    }
    else if (this.posicao == "-20vw"){
      this.posicao = "-90vw";
    }
    console.log(this.posicao, this.qualCal);
  }

  mudaPosiDi() {
    /*if (this.qualCal == 3) {
      this.posicao = "-20vw";
      this.qualCal--;
      this.botEsDis = "none";
    }
    else if (this.qualCal == 2) {
      this.posicao = "44vw";
      this.botDiDis = "none";
      this.qualCal--;
    }*/

    if (this.posicao == "-90vw") {
      this.posicao = "-20vw";
    }
    else if (this.posicao == "-20vw"){
      this.posicao = "44vw";
    }
    console.log(this.posicao, this.qualCal);
  }

  // Calculadora Noob

  number1 : number = 0;
  number2 : number = 0;
  resultado;

  calcula(){
    this.resultado = this.number1 + this.number2;
    // this.resultado = eval(this.number1 + this.number2);
  }

  // Calculadora Pro

  num1;
  num2;

  tipoInput : string = "number";
  resultado1 : number = 0;
  sinal : string;
  informacao : string = "Coloque um numero e pressione \"Enter\"";

  trocar(event){
    if (event.key == "Enter") {
      if (this.tipoInput == "number") {
        this.tipoInput = "text";
        this.informacao = "Coloque o sinal da conta (+, -, *, /) e pressione \"Enter\"";
        if (this.resultado1 == 0) {
          this.resultado1 = +event.target.value;
        }
        else{
          if (this.sinal == "+") {
            this.resultado1 = this.resultado1 + +event.target.value;
          }
          else if (this.sinal == "-") {
            this.resultado1 = this.resultado1 - +event.target.value;
          }
          else if (this.sinal == "*") {
            this.resultado1 = this.resultado1 * +event.target.value;
          }
          else {
            this.resultado1 = this.resultado1 / +event.target.value;
        }
      }
        event.target.value = "";
      }
      else{
        if (event.target.value == "+") {
          this.sinal = "+";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else if (event.target.value == "-") {
          this.sinal = "-";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else if (event.target.value == "*") {
          this.sinal = "*";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else if (event.target.value == "/") {
          this.sinal = "/";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else{
          alert("Sinal Inválido!")
        }
      }
    }
  }

  // Calculadora God

  finalEquation = "";
  lastN: any = " ";

  myFunction(n) {
    if (n == "c") {
      this.finalEquation= "";
    }
    else if (n == "<") {
      this.finalEquation.endsWith(this.lastN);
      this.lastN = 0;
    }
    else{
      this.finalEquation = this.finalEquation + n;
      this.finalEquation.endsWith(this.lastN);
      this.lastN = n;
    }
  }

  solve() {
    this.finalEquation = eval(this.finalEquation);
  }

}
