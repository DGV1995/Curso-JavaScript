import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
	selector: "videojuego", // Nos permite indicar qué nombre va a tener la etiqueta (o directiva) de este componente
	templateUrl: "./videojuego.component.html"
})

// Nombre que le pongo a la clase para exportarla
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

	constructor() {
		//console.log("Se ha cargado el componente videojuego.component.ts");
		this.titulo = "Componente de videojuegos"
		this.listado = "Listado de juegos más populares"
	}

	public titulo: string;
	public listado: string;

	// Este método se ejcutado inmediatamente después del constructor
	ngOnInit() {
		//console.log("OnInit ejecutado");
	}

	// Este método se ejecutada cada vez que se realiza algún cambio en el componente o en la aplicación de angular
	ngDoCheck() {
		//console.log("DoCheck ejecutado");
	}

	// Este método se ejecuta cuando se vaya a eliminar el componente
	ngOnDestroy() {
		console.log("OnDestroy ejecutado");
	}

	cambiarTitulo() {
		this.titulo = "Nuevo título del componente";
	}

}