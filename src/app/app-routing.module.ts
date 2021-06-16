import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AnimeComponent } from './components/anime/anime.component';
import { DetalheComponent } from './components/anime/detalhe/detalhe.component';
import { ClinicaVeterenariaComponent } from './components/clinica-veterenaria/clinica-veterenaria.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { Four0fourComponent } from './components/four0four/four0four.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { AddComponent } from './components/ListaCompras/add/add.component';
import { BuyComponent } from './components/ListaCompras/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"Home", component: HomeComponent},
  {path:"Calculadora", component: CalculadoraComponent},
  {path:"EventsReferences", component: EvAndRefComponent},
  {path:"ClinicaVeterinaria", component: ClinicaVeterenariaComponent},
  {path:"ListaCompras", component: ListaComprasComponent,
    children: [{path:'Add', component: AddComponent},
              {path:'Buy', component: BuyComponent},]},
  {path:"p-color", component: PColorComponent,
    children: [
      {path: ":color", component: SColorComponent}
    ]},
  {path:"Anime", component: AnimeComponent,
    children: [
      {path:"Detalhes", component: DetalheComponent}
    ] },
  {path:"NotFound", component: Four0fourComponent},
  {path:"**", redirectTo:"NotFound",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
