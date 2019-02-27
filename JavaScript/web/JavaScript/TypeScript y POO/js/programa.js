var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase padre
var Programa = /** @class */ (function () {
    function Programa(nombre, version) {
        this.nombre = nombre;
        this.version = version;
    }
    /*protected nombre: string;
    protected version: number;*/
    /*constructor(nombre: string, version: number) {
        this.nombre = nombre;
        this.version = version;
    }*/
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
}());
// Clase hija
var editorVideo = /** @class */ (function (_super) {
    __extends(editorVideo, _super);
    function editorVideo(nombre, version, timeline) {
        var _this = _super.call(this, nombre, version) || this;
        _this.timeline = timeline;
        return _this;
    }
    editorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    editorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    editorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return editorVideo;
}(Programa));
var editor = new editorVideo("OSCANN Desk 100", 1, 3000);
console.log(editor.getAllData());
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());
