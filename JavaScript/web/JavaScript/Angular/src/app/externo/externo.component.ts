import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  constructor(
  	private _peticionesServices: PeticionesService
  ) { 
    this.userId = 1;
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date();
  }

  cargaUsuario() {
      this.user = false;
      this._peticionesServices.getUser(this.userId).subscribe(
        // Función de callback que se ejecuta en el caso de que todo funciones bien
        result => {
          this.user = result.data;
        },
        // Función de error que se ejecuta en el caso de error
        error => {
          console.log(<any>error);
        }
      );
  	
  }

}
