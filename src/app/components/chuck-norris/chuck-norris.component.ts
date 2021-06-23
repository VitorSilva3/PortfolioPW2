import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from 'src/app/services/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  constructor(private chuckService : ChuckNorrisService) { }

  ngOnInit(): void {
  }

  piada : string = "Wait for it";

  resultado : any;
  getJoke() {
    this.chuckService.getJoke().subscribe(
      data => {
        this.resultado = data;
        this.piada = this.resultado.value;
      }
    );

  }

  piadas: any;
  getMoreJokes(valoraPesquisar: string){
    this.chuckService.getJokeFromCat(valoraPesquisar).subscribe(data => {this.piadas = data});
    this.piada = "";
  }

}
