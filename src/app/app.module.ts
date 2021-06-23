import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { Four0fourComponent } from './components/four0four/four0four.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { AddComponent } from './components/lista-compras/ListaCompras/add/add.component';
import { BuyComponent } from './components/lista-compras/ListaCompras/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { AnimeComponent } from './components/anime/anime.component';
import { DetalheComponent } from './components/anime/detalhe/detalhe.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { HttpClientModule } from '@angular/common/http';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    HomeComponent,
    NavBarComponent,
    EvAndRefComponent,
    Four0fourComponent,
    ListaComprasComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    SColorComponent,
    AnimeComponent,
    DetalheComponent,
    CookiesComponent,
    ChuckNorrisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
