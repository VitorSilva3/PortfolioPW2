import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/class/artigo';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  listaService : ListaService;

  constructor(private lista : ListaService) {
    this.listaService = lista;
   }

  ngOnInit(): void {
  }

  AdicionarLista(nome, preco){
    this.listaService.listaCompras.push(new Artigo(nome, preco));
  }

}
