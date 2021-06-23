import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  constructor(private httpAsk : HttpClient) { }

  link = "https://api.chucknorris.io/jokes/random";
  link2= "https://api.chucknorris.io/jokes/search";

  getJoke(){
    return this.httpAsk.get(this.link);
  }

  getJokeFromCat(valoraPesquisar: string){
    return this.httpAsk.get(this.link2, {
      params:{'query': valoraPesquisar}
    });
  }
}
