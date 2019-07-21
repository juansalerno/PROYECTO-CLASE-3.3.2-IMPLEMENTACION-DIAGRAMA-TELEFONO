"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 50;
        this.linternaPrendida = false;
        this.numeroLlamadasRealizadas = 0;
        this.numeroMensajesRealizados = 0;
    }
    Telefono.prototype.mandarMensaje = function (msg, numero) {
        if (msg != '' && numero != null) {
            console.log('Mensaje enviado al ' + numero + ': ' + msg);
            this.numeroMensajesRealizados += 1;
            return true;
        }
        else
            return false;
    };
    Telefono.prototype.hacerLLamada = function () {
        console.log('Llamada realizada');
        this.numeroLlamadasRealizadas += 1;
    };
    Telefono.prototype.prenderApagarTelefono = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log('Se ha apagado el telefono');
        }
        else {
            this.estaPrendido = true;
            console.log('Se ha prendido el telefono');
        }
    };
    Telefono.prototype.cargarBateria = function () {
        this.bateriaActual += 1;
        console.log('Bateria cargada en 1 unidad');
    };
    Telefono.prototype.usarBateria = function () {
        this.bateriaActual -= 1;
        console.log('Bateria usada en 1 unidad');
    };
    Telefono.prototype.getEstadoBateria = function () {
        console.log('El nivel de bateria es: ' + this.bateriaActual);
        return this.bateriaActual;
    };
    Telefono.prototype.getLlamadasRealizadas = function () {
        console.log('El numero de llamadas realizadas es: ' + this.numeroLlamadasRealizadas);
        return this.numeroLlamadasRealizadas;
    };
    Telefono.prototype.getMensajesRealizados = function () {
        console.log('El numero de mensajes realizados es: ' + this.numeroMensajesRealizados);
        return this.numeroMensajesRealizados;
    };
    Telefono.prototype.prenderApagarLinterna = function () {
        if (this.linternaPrendida) {
            this.linternaPrendida = false;
            console.log('Se ha apagado la linterna');
        }
        else {
            this.linternaPrendida = true;
            console.log('Se ha prendido la linterna');
        }
    };
    return Telefono;
}());
exports["default"] = Telefono;
