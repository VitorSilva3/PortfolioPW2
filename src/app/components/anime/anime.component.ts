import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/class/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(private h : AnimeService) { }

  ngOnInit(): void {
  }

  animes: Array<Anime> = [];
  pesquisar(valorPesquisa) {
    this.h.getPost(valorPesquisa).subscribe(
        data => {this.animes = data['results'].map(x=> new Anime(x))
        console.log(data);
        console.log(this.animes);
      }
    );
  }

}
