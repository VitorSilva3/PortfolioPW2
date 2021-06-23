export class Anime {
  imagem : string;
  id: string;

  constructor(x){
    this.imagem = x.image_url;
    this.id = x.mal_id;
  }
}
