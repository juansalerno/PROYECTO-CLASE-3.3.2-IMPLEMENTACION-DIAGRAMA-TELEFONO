"use strict";
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
exports.__esModule = true;
var telefono_1 = require("./telefono");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(camara) {
        var _this = _super.call(this) || this;
        _this.camara = camara;
        _this.fotosActuales = 0;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log(this.camara.sacarFoto());
        this.fotosActuales += 1;
    };
    TelefonoConCamara.prototype.eliminarFoto = function () {
        this.fotosActuales -= 1;
        console.log('Foto Eliminada');
    };
    TelefonoConCamara.prototype.getFotosActuales = function () {
        console.log('El numero de fotos actuales es: ' + this.fotosActuales);
        return this.fotosActuales;
    };
    TelefonoConCamara.prototype.imprimirEstadoGlobal = function () {
        console.log(this);
    };
    return TelefonoConCamara;
}(telefono_1["default"]));
exports["default"] = TelefonoConCamara;
