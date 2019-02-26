import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Importamos el módulo para los formularios*/
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [ // Sitio donde se cargan los componentes
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
