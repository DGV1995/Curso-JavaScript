(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{\n\t\t\t\t\tbackground: config.fondo, \n\t\t\t\t\tpadding: '20px', \n\t\t\t\t\tborder: '5px solid black'\n\t\t\t\t}\">\n\t<h1>\n\t    Bienvenido a  {{title}}!\n\t</h1>\n\t<h2>{{descripcion}}</h2>\n\t<hr>\n\n\t<nav>\n\t\t<a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">Home</a>\n\t\t&nbsp;\n\t\t<a [routerLink]=\"['/zapatillas']\" [routerLinkActive]=\"['active']\">Zapatillas</a>\n\t\t&nbsp;\n\t\t<a [routerLink]=\"['/videojuego']\" [routerLinkActive]=\"['active']\">Videojuegos</a>\n\t\t&nbsp;\n\t\t<a [routerLink]=\"['/cursos']\" [routerLinkActive]=\"['active']\">Cursos</a>\n\t\t&nbsp;\n\t\t<a [routerLink]=\"['/externo']\" [routerLinkActive]=\"['active']\">Externo</a>\n\t</nav>\n\t<hr>\n\n\t<!--\n\t<button (click)=\"ocultarVideojuegos(false)\" *ngIf=\"mostrar_videojuegos\">Ocultar</button>\n\t<button (click)=\"ocultarVideojuegos(true)\" *ngIf=\"!mostrar_videojuegos\">Mostrar</button>\n\t<!--videojuego solo se mostrará si mostrar_videojuegos=true\n\t<videojuego *ngIf=\"mostrar_videojuegos\"></videojuego>-\n\t<cursos></cursos>\n\t-->\n\t\n\t<!--<zapatillas></zapatillas>-->\n\n\t<!--Etiqueta de mi sistema de rutas-->\n\t<router-outlet></router-outlet>\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_configuracion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/configuracion */ "./src/app/models/configuracion.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Master de JavaScript y Angular';
        this.mostrar_videojuegos = true;
        this.title = _models_configuracion__WEBPACK_IMPORTED_MODULE_2__["configuracion"].titulo;
        this.descripcion = _models_configuracion__WEBPACK_IMPORTED_MODULE_2__["configuracion"].descripcion;
        this.config = _models_configuracion__WEBPACK_IMPORTED_MODULE_2__["configuracion"];
    }
    AppComponent.prototype.ocultarVideojuegos = function (value) {
        this.mostrar_videojuegos = value;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _videojuego_videojuego_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./videojuego/videojuego.component */ "./src/app/videojuego/videojuego.component.ts");
/* harmony import */ var _zapatillas_zapatillas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zapatillas/zapatillas.component */ "./src/app/zapatillas/zapatillas.component.ts");
/* harmony import */ var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cursos/cursos.component */ "./src/app/cursos/cursos.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _externo_externo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./externo/externo.component */ "./src/app/externo/externo.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _videojuego_videojuego_component__WEBPACK_IMPORTED_MODULE_8__["VideojuegoComponent"],
                _zapatillas_zapatillas_component__WEBPACK_IMPORTED_MODULE_9__["ZapatillasComponent"],
                _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_10__["CursosComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _externo_externo_component__WEBPACK_IMPORTED_MODULE_12__["ExternoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _zapatillas_zapatillas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zapatillas/zapatillas.component */ "./src/app/zapatillas/zapatillas.component.ts");
/* harmony import */ var _videojuego_videojuego_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videojuego/videojuego.component */ "./src/app/videojuego/videojuego.component.ts");
/* harmony import */ var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cursos/cursos.component */ "./src/app/cursos/cursos.component.ts");
/* harmony import */ var _externo_externo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./externo/externo.component */ "./src/app/externo/externo.component.ts");

// Importar componentes





// Array de configuración de las rutas
var appRoutes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: "zapatillas", component: _zapatillas_zapatillas_component__WEBPACK_IMPORTED_MODULE_2__["ZapatillasComponent"] },
    { path: "videojuego", component: _videojuego_videojuego_component__WEBPACK_IMPORTED_MODULE_3__["VideojuegoComponent"] },
    { path: "cursos", component: _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_4__["CursosComponent"] },
    { path: "cursos/:nombre", component: _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_4__["CursosComponent"] },
    { path: "cursos/:nombre/:followers", component: _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_4__["CursosComponent"] },
    { path: "externo", component: _externo_externo_component__WEBPACK_IMPORTED_MODULE_5__["ExternoComponent"] },
    /*Ruta de error 404 --> siempre la última!*/
    { path: "**", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
// Exportar el módulo del router
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/cursos/cursos.component.css":
/*!*********************************************!*\
  !*** ./src/app/cursos/cursos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvcy9jdXJzb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cursos/cursos.component.html":
/*!**********************************************!*\
  !*** ./src/app/cursos/cursos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Componente de cursos</h1>\n<button (click)=\"redirigir()\">Llévame a Zapatillas</button>\n<h3 *ngIf=\"nombre\">Bienvenido, {{nombre}}</h3>\n<h3 *ngIf=\"followers\">Tus seguidores son: {{followers}}</h3>\n"

/***/ }),

/***/ "./src/app/cursos/cursos.component.ts":
/*!********************************************!*\
  !*** ./src/app/cursos/cursos.component.ts ***!
  \********************************************/
/*! exports provided: CursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosComponent", function() { return CursosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CursosComponent = /** @class */ (function () {
    function CursosComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    CursosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.nombre = params.nombre;
            _this.followers = +params.followers;
        });
    };
    CursosComponent.prototype.redirigir = function () {
        this._router.navigate(["zapatillas"]);
    };
    CursosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cursos',
            template: __webpack_require__(/*! ./cursos.component.html */ "./src/app/cursos/cursos.component.html"),
            styles: [__webpack_require__(/*! ./cursos.component.css */ "./src/app/cursos/cursos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CursosComponent);
    return CursosComponent;
}());



/***/ }),

/***/ "./src/app/externo/externo.component.css":
/*!***********************************************!*\
  !*** ./src/app/externo/externo.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybm8vZXh0ZXJuby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/externo/externo.component.html":
/*!************************************************!*\
  !*** ./src/app/externo/externo.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)]=\"userId\" (keyup.enter)=\"cargaUsuario()\"/>\n\n<div *ngIf=\"!user\">Cargando...</div>\n\n<div *ngIf=\"user\">\n\t<img src=\"{{user.avatar}}\" width=\"200px\"/>\n\t<h2> {{user.first_name + \" \" + user.last_name}} </h2>\n</div>\n"

/***/ }),

/***/ "./src/app/externo/externo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/externo/externo.component.ts ***!
  \**********************************************/
/*! exports provided: ExternoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternoComponent", function() { return ExternoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");



var ExternoComponent = /** @class */ (function () {
    function ExternoComponent(_peticionesServices) {
        this._peticionesServices = _peticionesServices;
        this.userId = 1;
    }
    ExternoComponent.prototype.ngOnInit = function () {
        this.cargaUsuario();
        this.fecha = new Date();
    };
    ExternoComponent.prototype.cargaUsuario = function () {
        var _this = this;
        this.user = false;
        this._peticionesServices.getUser(this.userId).subscribe(
        // Función de callback que se ejecuta en el caso de que todo funciones bien
        function (result) {
            _this.user = result.data;
        }, 
        // Función de error que se ejecuta en el caso de error
        function (error) {
            console.log(error);
        });
    };
    ExternoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-externo',
            template: __webpack_require__(/*! ./externo.component.html */ "./src/app/externo/externo.component.html"),
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]],
            styles: [__webpack_require__(/*! ./externo.component.css */ "./src/app/externo/externo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], ExternoComponent);
    return ExternoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Página principal</h2>\n\n<div *ngIf=\"identificado; then siIdentificado; else noIdentificado\">\t\n</div>\n\n<!--Si se cumple la condición 'if', se crea esta plantilla como una variable-->\n<ng-template #siIdentificado>\n\t<h3>Estás identificado en la aplicación</h3>\n\t<button (click)=\"logOut()\">Log out</button>\n</ng-template>\n\n<!--Si se cumple la condición 'else', se crea esta plantilla como una variable-->\n<ng-template #noIdentificado>\n\t<p>No estás identificado, pulsa este botón para identificarte</p>\n\t<button (click)=\"setIdentificado()\">Identifícate</button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.identificado = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.setIdentificado = function () {
        this.identificado = true;
    };
    HomeComponent.prototype.logOut = function () {
        this.identificado = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/configuracion.ts":
/*!*****************************************!*\
  !*** ./src/app/models/configuracion.ts ***!
  \*****************************************/
/*! exports provided: configuracion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuracion", function() { return configuracion; });
var configuracion = {
    color: "red",
    fondo: "#eee",
    titulo: "Aplicación con Angular",
    descripcion: "Aprendiendo Angular"
};


/***/ }),

/***/ "./src/app/models/zapatilla.ts":
/*!*************************************!*\
  !*** ./src/app/models/zapatilla.ts ***!
  \*************************************/
/*! exports provided: Zapatilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zapatilla", function() { return Zapatilla; });
var Zapatilla = /** @class */ (function () {
    /*
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    contructor(nombre, marca, color, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }*/
    // Hacerlo automáticamente con TypeScript
    function Zapatilla(nombre, marca, color, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    return Zapatilla;
}());



/***/ }),

/***/ "./src/app/services/peticiones.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/peticiones.service.ts ***!
  \************************************************/
/*! exports provided: PeticionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionesService", function() { return PeticionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PeticionesService = /** @class */ (function () {
    function PeticionesService(_http) {
        this._http = _http;
        this.url = "https://reqres.in/";
    }
    // Hacemos la petición ajax
    PeticionesService.prototype.getUser = function (userId) {
        return this._http.get(this.url + "api/users/" + userId);
    };
    PeticionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeticionesService);
    return PeticionesService;
}());



/***/ }),

/***/ "./src/app/services/zapatilla.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/zapatilla.service.ts ***!
  \***********************************************/
/*! exports provided: ZapatillaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapatillaService", function() { return ZapatillaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_zapatilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/zapatilla */ "./src/app/models/zapatilla.ts");



var ZapatillaService = /** @class */ (function () {
    function ZapatillaService() {
        this.zapatillas = [
            new _models_zapatilla__WEBPACK_IMPORTED_MODULE_2__["Zapatilla"]("Nike AirForce1", "Nike", "Blanco", 100, true),
            new _models_zapatilla__WEBPACK_IMPORTED_MODULE_2__["Zapatilla"]("Adidas Superstars", "Adidas", "Blanco", 110, false),
            new _models_zapatilla__WEBPACK_IMPORTED_MODULE_2__["Zapatilla"]("Reebok Nano 5.0", "Reebok", "Gris", 85, true),
            new _models_zapatilla__WEBPACK_IMPORTED_MODULE_2__["Zapatilla"]("Nike AirMax", "Nike", "Rojo", 130, false)
        ];
    }
    ZapatillaService.prototype.getTexto = function () {
        return "Hola mundo desde un servicio";
    };
    ZapatillaService.prototype.getZapatillas = function () {
        return this.zapatillas;
    };
    ZapatillaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ZapatillaService);
    return ZapatillaService;
}());



/***/ }),

/***/ "./src/app/videojuego/videojuego.component.html":
/*!******************************************************!*\
  !*** ./src/app/videojuego/videojuego.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{titulo}}</h2>\n<p>{{listado}}</p>\n\n<button (click)=\"cambiarTitulo()\">CambiarTitulo</button>\n\t<ul>\n\t\t<li>GTA</li>\n\t\t<li>Prince of Persia</li>\n\t\t<li>Tekken</li>\n\t\t<li>Maria Bross</li>\n\t</ul>"

/***/ }),

/***/ "./src/app/videojuego/videojuego.component.ts":
/*!****************************************************!*\
  !*** ./src/app/videojuego/videojuego.component.ts ***!
  \****************************************************/
/*! exports provided: VideojuegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoComponent", function() { return VideojuegoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideojuegoComponent = /** @class */ (function () {
    function VideojuegoComponent() {
        //console.log("Se ha cargado el componente videojuego.component.ts");
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de juegos más populares";
    }
    // Este método se ejcutado inmediatamente después del constructor
    VideojuegoComponent.prototype.ngOnInit = function () {
        //console.log("OnInit ejecutado");
    };
    // Este método se ejecutada cada vez que se realiza algún cambio en el componente o en la aplicación de angular
    VideojuegoComponent.prototype.ngDoCheck = function () {
        //console.log("DoCheck ejecutado");
    };
    // Este método se ejecuta cuando se vaya a eliminar el componente
    VideojuegoComponent.prototype.ngOnDestroy = function () {
        console.log("OnDestroy ejecutado");
    };
    VideojuegoComponent.prototype.cambiarTitulo = function () {
        this.titulo = "Nuevo título del componente";
    };
    VideojuegoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "videojuego",
            template: __webpack_require__(/*! ./videojuego.component.html */ "./src/app/videojuego/videojuego.component.html")
        })
        // Nombre que le pongo a la clase para exportarla
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideojuegoComponent);
    return VideojuegoComponent;
}());



/***/ }),

/***/ "./src/app/zapatillas/zapatillas.component.html":
/*!******************************************************!*\
  !*** ./src/app/zapatillas/zapatillas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{titulo}}</h2>\n<p>Añadir marca:</p>\n<p>\n\t<!--Asignamos dinámicamente el valor introducido en el input a la variable 'mi_marca'-->\n\t<input type=\"text\" [(ngModel)]=\"mi_marca\" (blur)=\"onBlur()\" (keyup.enter)=\"mostrarPalabra()\"/>\n\t<button (click)=\"getMarca()\">Mostrar</button>\n\t<button (click)=\"addMarca()\">Añadir marca</button>\n</p>\n<strong>{{mi_marca}}</strong>\n<p>Compra las zapatillas de las mejores marcas</p>\n<ul>\n\t<li *ngFor=\"let marca of marcas\">{{marca}}\n\t\t<button (click)=\"borrarMarca(indice)\">Borrar</button>\n\t</li>\n</ul>\n<p>Modelos disponibles:</p>\n<ul>\n\t<!--Bucle for con Angular-->\n\t<li *ngFor=\"let zapatilla of zapatillas\">\n\t\t<!--Tachamos con una línea los elementos cuyo stock sea false-->\n\t\t<span [ngStyle] = \"{\n\t\t\t\t\t\t\t'text-decoration': !zapatilla.stock ? 'line-through' : 'none'\n\t\t\t\t\t\t  }\"\n\t\t>\n\t\t\t{{zapatilla.nombre}} - <strong [class.altoPrecio] = \"zapatilla.precio >= 80\"\n\t\t\t\t\t\t\t\t\t\t   [ngClass]=\"{\n\t\t\t\t\t\t\t\t\t\t   \t\t\t\t'fondoRojo': zapatilla.precio > 100, \n\t\t\t\t\t\t\t\t\t\t   \t\t\t\t'subrayado': zapatilla.marca == 'Nike'\n\t\t\t\t\t\t\t\t\t\t   \t\t\t  }\"\n\t\t\t\t\t\t\t\t\t>{{zapatilla.precio}}€</strong>\n\t\t</span>\n\t\t<span *ngIf=\"zapatilla.precio <= 100\" \n\t\t\t  [style.background] = \"zapatilla.precio <= 90 ? 'green' : 'transparent' \"\n\t\t\t  [style.color] = \"zapatilla.precio <= 90 ? 'white' : 'black' \"\n\t\t> ¡EN OFERTA!\n\t\t</span>\n\t\t\n\t</li>\n</ul>\n\n<p>El color de la mayoría de nuestras zapatillas es:</p>\n<input type=\"text\" [(ngModel)]=\"color\"/>\n<!--Directiva switch case-->\n<ul [ngSwitch]=\"color\">\n\t<li *ngSwitchCase=\"'yellow'\">\n\t\t<span [ngStyle]=\"{background:'yellow'}\">Amarillo</span>\n\t</li>\n\t<li *ngSwitchCase=\"'red'\">\n\t\t<span [ngStyle]=\"{background:'red', color:'white'}\">Rojo</span>\n\t</li>\n\t<li *ngSwitchCase=\"'blue'\">\n\t\t<span [ngStyle]=\"{background:'blue', color:'white'}\">Azul</span>\n\t</li>\n\t<li *ngSwitchCase=\"'orange'\">\n\t\t<span [ngStyle]=\"{background:'orange', color:'white'}\">Naranja</span>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/zapatillas/zapatillas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/zapatillas/zapatillas.component.ts ***!
  \****************************************************/
/*! exports provided: ZapatillasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapatillasComponent", function() { return ZapatillasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_zapatilla_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/zapatilla.service */ "./src/app/services/zapatilla.service.ts");



var ZapatillasComponent = /** @class */ (function () {
    function ZapatillasComponent(
    //Inyectamos el servicio como una propiedad
    _zapatillaService) {
        this._zapatillaService = _zapatillaService;
        this.titulo = "Componente de zapatillas";
        this.color = "yellow";
        this.marcas = new Array();
    }
    ZapatillasComponent.prototype.ngOnInit = function () {
        //Utilizamos el servicio
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
    };
    ZapatillasComponent.prototype.getMarcas = function () {
        var _this = this;
        this.zapatillas.forEach(function (element, index) {
            if (_this.marcas.indexOf(element.marca) < 0) // Para que no se repitan marcas
                _this.marcas.push(element.marca);
        });
        console.log(this.marcas);
    };
    ZapatillasComponent.prototype.getMarca = function () {
        alert(this.mi_marca);
    };
    ZapatillasComponent.prototype.addMarca = function () {
        this.marcas.push(this.mi_marca);
    };
    ZapatillasComponent.prototype.borrarMarca = function (indice) {
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1); //Borra 1 elemento a partir del índice reibido como parámetro
    };
    // Cuando hago click fuera del input
    ZapatillasComponent.prototype.onBlur = function () {
        console.log("Has salido del input");
    };
    // Cuando pulso la letra enter en el input
    ZapatillasComponent.prototype.mostrarPalabra = function () {
        alert(this.mi_marca);
    };
    ZapatillasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "zapatillas",
            template: __webpack_require__(/*! ./zapatillas.component.html */ "./src/app/zapatillas/zapatillas.component.html"),
            providers: [_services_zapatilla_service__WEBPACK_IMPORTED_MODULE_2__["ZapatillaService"]] //Servicios 
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_zapatilla_service__WEBPACK_IMPORTED_MODULE_2__["ZapatillaService"]])
    ], ZapatillasComponent);
    return ZapatillasComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/diegogarcia-viana/Desktop/Personal/Curso JavaScript/Curso-JavaScript/JavaScript/web/JavaScript/Angular/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/diegogarcia-viana/Desktop/Personal/Curso JavaScript/Curso-JavaScript/JavaScript/web/JavaScript/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map