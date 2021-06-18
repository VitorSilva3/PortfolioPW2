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

  botEsDis = "inline-block";
  botDiDis = "None";
  posicao = "44vw";
  nomeCal = "Noob";

  mudaPosiEs() {
    if (this.posicao == "44vw") {
      this.posicao = "-22vw";
      this.nomeCal = "Pro";
      this.botDiDis = "inline-block";
    }
    else if (this.posicao == "-22vw"){
      this.posicao = "-89vw";
      this.nomeCal = "God";
      this.botEsDis = "none";
    }
    console.log(this.posicao);
  }

  mudaPosiDi() {
    if (this.posicao == "-89vw") {
      this.posicao = "-22vw";
      this.nomeCal = "Pro";
      this.botEsDis = "inline-block";
    }
    else if (this.posicao == "-22vw"){
      this.posicao = "44vw";
      this.nomeCal = "Noob";
      this.botDiDis = "none";
    }
    console.log(this.posicao);
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
