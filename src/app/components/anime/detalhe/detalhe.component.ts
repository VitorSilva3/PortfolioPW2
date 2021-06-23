import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/class/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute, private httpAsk : AnimeService) { }

  anime :string;
  titulo;
  sinopse;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params =>{
        this.anime = params.id
        this.httpAsk.Anime(this.anime).subscribe(
          data => {console.log(data)
            this.titulo = (data["title"])
            this.sinopse = (data["synopsis"])
          }
        )
      }
    )

  }

}
