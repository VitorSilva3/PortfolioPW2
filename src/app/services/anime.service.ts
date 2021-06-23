import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private httpAsk : HttpClient) { }

  linkAnime = "https://api.jikan.moe/v3/search/anime";

  linkDetail ="https://api.jikan.moe/v3/anime/"

  getPost(valorPesquisa : any){
    return this.httpAsk.get(this.linkAnime, {
      params:{'q': valorPesquisa}
    });
  }

  Anime(x){
    return this.httpAsk.get(this.linkDetail+x
    );
  }
}
