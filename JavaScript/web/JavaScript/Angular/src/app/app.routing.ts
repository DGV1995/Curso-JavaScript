// Importar los módulos del router de Angular
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

// Importar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";

// Array de configuración de las rutas
const appRoutes: Routes = [
	{path: "", component: HomeComponent},
	{path: "zapatillas", component: ZapatillasComponent},
	{path: "videojuego", component: VideojuegoComponent},
	{path: "cursos", component: CursosComponent},
	/*Ruta de error 404 --> siempre la última!*/
	{path: "**", component: HomeComponent}
];

// Exportar el módulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);