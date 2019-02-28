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

  public new_user: any;
  public usuario_guardado: any;

  constructor(
  	private _peticionesServices: PeticionesService
  ) { 
      this.userId = 1;
      this.new_user = {
        "name": "morpheus",
        "job": "leader"
      };
      this.usuario_guardado = false;
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date(2019, 2, 28);
  }

  cargaUsuario() {

      this.user = false;
      // El método subscribe me recoge la información que devuelve la petición AJAX
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

  onSubmit(form) {

    this._peticionesServices.addUser(this.new_user).subscribe(
      result => {
        this.usuario_guardado = result;
        console.log(this.usuario_guardado);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
