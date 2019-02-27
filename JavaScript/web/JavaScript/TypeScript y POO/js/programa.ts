function arranque(lanzar: string) {
	return function(target: function) {
		target.prototype.lanzamiento = function(): void {
			alert(lanzar);
		}
	}
}
// A la clase a la que le añadamos este decorador, se le añade un nuevo método llamado 'lanzamiento'


// Clase padre
@arranque("Lanzamiento del curso de NodeJS y Angular") // --> Le añade el método a la clase 'Programa'
class Programa {

	constructor(
		protected nombre: string,
		protected version: number
	) {}

	/*protected nombre: string;
	protected version: number;*/

	/*constructor(nombre: string, version: number) {
		this.nombre = nombre;
		this.version = version;
	}*/

	public setNombre(nombre: string) {
		this.nombre = nombre;
	}

	public setVersion(version: number) {
		this.version = version;
	}

	public getNombre(): string {
		return this.nombre;
	}

	public getVersion(): number {
		return this.version;
	}

}

// Clase hija
class editorVideo extends Programa {

	private timeline: number;

	constructor(nombre: string, version: number, timeline: number) {
		super(nombre, version);
		this.timeline = timeline;
	}

	public setTimeline(timeline: number) {
		this.timeline = timeline;
	}

	public getTimeline(): number {
		return this.timeline;
	}

	public getAllData(): string {
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
	}

}

var programa = new Programa("Sony Vegas", 1);
programa.lanzamiento();

var editor = new editorVideo("OSCANN Desk 100", 1, 3000);
console.log(editor.getAllData());

editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());

// Lógica del formulario
var programas: Array<Programa>;

var boton = document.getElementById("boton");

function guardar() {

	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
	var programa = new Programa(nombre, 1);
	programas.push(programa);

	var list = "";

	for (var i = 0; i < programas.length; i++) {
		list += "<li>" + programas[i].getNombre() + "</li>";
	}

	var listado = <HTMLElement>document.getElementById("listado");
	listado.innerHTML = list;

}

