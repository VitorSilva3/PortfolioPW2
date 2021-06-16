import { Injectable } from '@angular/core';
import {Artigo} from '../class/artigo';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  listaCompras: Array<Artigo> = new Array<Artigo>();
}
