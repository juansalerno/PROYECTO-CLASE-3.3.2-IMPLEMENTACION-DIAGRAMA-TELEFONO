export default class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;
    protected numeroLlamadasRealizadas: number;
    protected numeroMensajesRealizados: number;

    constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 50;
        this.linternaPrendida = false;
        this.numeroLlamadasRealizadas = 0;
        this.numeroMensajesRealizados = 0;

    }

    public mandarMensaje(msg: string, numero: number): boolean { //el diagrama dice tipo funcion boolean
        if (msg != '' && numero != null) {
            console.log('Mensaje enviado al ' + numero + ': ' + msg);
            this.numeroMensajesRealizados += 1;
            return true;
        }
        else return false;
    }

    public hacerLLamada(): void {
        console.log('Llamada realizada');
        this.numeroLlamadasRealizadas += 1;
    }

    public prenderApagarTelefono(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log('Se ha apagado el telefono');
        }
        else {
            this.estaPrendido = true;
            console.log('Se ha prendido el telefono');
        }
    }

    public cargarBateria(): void {
        this.bateriaActual += 1;
        console.log('Bateria cargada en 1 unidad');
    }

    public usarBateria(): void {
        this.bateriaActual -= 1;
        console.log('Bateria usada en 1 unidad')
    }

    public getEstadoBateria(): number {
        console.log('El nivel de bateria es: '+ this.bateriaActual)
        return this.bateriaActual;
    }

    public getLlamadasRealizadas(): number {
        console.log('El numero de llamadas realizadas es: '+this.numeroLlamadasRealizadas);
        return this.numeroLlamadasRealizadas;
    }

    public getMensajesRealizados(): number {
        console.log('El numero de mensajes realizados es: '+ this.numeroMensajesRealizados);
        return this.numeroMensajesRealizados;
    }

    public prenderApagarLinterna(): void {
        if (this.linternaPrendida) {
            this.linternaPrendida = false;
            console.log('Se ha apagado la linterna');
        }
        else {
        this.linternaPrendida = true;
            console.log('Se ha prendido la linterna');
        }
    }

}